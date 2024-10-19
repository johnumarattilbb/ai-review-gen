import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Product, Review as ReviewType } from "@/lib/types";
import GeneratorForm from "./generator-form";

export function AIReviewSummary({ product, onNewReviews }: { product: Product, onNewReviews: (reviews: ReviewType[]) => void }) {

  return (
    <Card className="w-full max-w-prose p-10 grid gap-10">
      <CardHeader className="items-center space-y-0 gap-4 p-0">
        <div className="grid gap-1 text-center">
          <CardDescription className="text-xs">
            Add information for reviews
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-0 grid gap-4">
        <GeneratorForm onNewReviews={onNewReviews} />
      </CardContent>
    </Card>
  );
}

function numberWithOneDecimal(num: number) {
  if (num === Math.round(num)) return num;
  return Math.round(num * 10) / 10;
}
