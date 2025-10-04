import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, X, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CartDrawer = () => {
  const [open, setOpen] = useState(false);
  const { cart, removeFromCart, clearCart, increaseQty, decreaseQty } = useCart();

  // Listen for custom event to open cart
  React.useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-cart", handler);
    return () => window.removeEventListener("open-cart", handler);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        className={`fixed top-0 right-0 w-80 max-w-full h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ boxShadow: "rgba(0,0,0,0.18) 0px 12px 20px 4px" }}
        tabIndex={-1}
        aria-label="Shopping Cart Sidebar"
      >
        <div className="flex flex-col h-full relative z-50">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              <span className="font-semibold text-lg">Your Cart</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X />
            </Button>
          </div>
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cart.length === 0 ? (
              <div className="text-center text-muted-foreground py-12">
                Your cart is empty.
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 border-b py-3 last:border-b-0"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-muted-foreground text-sm">
                      ₹{item.price.toLocaleString()} x {item.quantity}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Button variant="ghost" size="icon" onClick={() => decreaseQty(item.id)}>-</Button>
                      <span>{item.quantity}</span>
                      <Button variant="ghost" size="icon" onClick={() => increaseQty(item.id)}>+</Button>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                    className="text-destructive"
                    title="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))
            )}
          </div>
          {/* Footer */}
          <div className="p-4 border-t">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium">Total:</span>
              <span className="text-lg font-bold text-primary">
                ₹{total.toLocaleString()}
              </span>
            </div>
            <Button className="w-full mb-2" disabled={cart.length === 0}>
              Checkout
            </Button>
            <Button
              className="w-full"
              variant="outline"
              onClick={clearCart}
              disabled={cart.length === 0}
            >
              Clear Cart
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default CartDrawer;