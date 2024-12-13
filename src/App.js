import { RouterProvider } from "react-router-dom";
import router from "./router";

export default function App() {
  return (
    <>
      <div aria-hidden="true" class="fixed hidden dark:md:block dark:opacity-70 -bottom-[40%] -left-[20%] z-0">
        <img src="https://nextui.org/gradients/docs-right.png" />
      </div>
      <RouterProvider router={router} />
    </>
  );
}
