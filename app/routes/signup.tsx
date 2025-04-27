import { lazy, Suspense } from "react";
import type { Route } from "../../.react-router/types/app/+types/root";

const Account = lazy(() => import("~/components/Account"));

export default function Signup() {
  return (
    <Suspense fallback={null}>
      <Account formType={"signup"} />
    </Suspense>
  );
}
