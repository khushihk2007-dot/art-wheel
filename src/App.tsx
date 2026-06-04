import { PaintingWheel } from "@/components/PaintingWheel";
import { paintings } from "@/data/paintings";

export default function App() {
  return (
    <main className="bg-background text-foreground">
      <PaintingWheel paintings={paintings} />
    </main>
  );
}
