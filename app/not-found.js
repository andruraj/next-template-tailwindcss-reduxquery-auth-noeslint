import { ErrorComponent } from "@/components/ErrorPage";

export default function NotFound() {
  return (
    <ErrorComponent
      errorHeader="Not Found"
      errorMsg="Could not find the requested resource"
    />
  );
}
