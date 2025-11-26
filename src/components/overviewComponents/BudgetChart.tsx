import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import type { Chart as ChartJS } from "chart.js";

export default function BudgetChart() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<ChartJS | null>(null);

  const centerText = {
    id: "centerText",
    afterDraw(chart: ChartJS) {
      const { ctx } = chart;

      ctx.save();

      ctx.textAlign = "center";

      ctx.font = "bold 32px sans-serif";
      ctx.fillStyle = "#2B2B2B";
      ctx.fillText("$338", chart.width / 2, chart.height / 2 - 10);

      ctx.font = "16px sans-serif";
      ctx.fillStyle = "#7b7b7b";
      ctx.fillText("of $975 limit", chart.width / 2, chart.height / 2 + 20);

      ctx.restore();
    },
  };

  useEffect(() => {
    const ctx = chartRef.current;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (!ctx) return;

    chartInstanceRef.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Entertainment", "Bills", "Dining Out", "Personal Care"],
        datasets: [
          {
            data: [50, 750, 75, 100],
            backgroundColor: ["#22636A", "#9BCFE8", "#E3B693", "#7F7A8F"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        // cast to any so TypeScript allows doughnut-specific 'cutout'
        cutout: "70%",
        plugins: { legend: { display: false } },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any,
      plugins: [centerText],
    });
  }, []);

  return (
    <div className="w-[250px] h-[250px]">
      <canvas ref={chartRef} />
    </div>
  );
}
