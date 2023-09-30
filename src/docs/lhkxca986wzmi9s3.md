---
title: react+echarts
urlname: lhkxca986wzmi9s3
date: "2023-08-27 10:03:18"
updated: "2023-08-28 08:48:41"
---

## react 中使用 echarts

```tsx
import { useRef, useEffect } from "react";
import * as echarts from "echarts/core";
import { GridComponent, GridComponentOption } from "echarts/components";
import { LineChart, LineSeriesOption } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

// 导入所需要的echarts组件和特性

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

// 定义ECharts的配置类型
type EChartsOption = echarts.ComposeOption<
  GridComponentOption | LineSeriesOption
>;

// 定义ECharts的配置选项
const option: EChartsOption = {
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
      areaStyle: {},
    },
  ],
};

const Main = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 避免在同一个 DOM 元素上多次创建 ECharts 实例
    if (chartRef.current) {
      const chart =
        echarts.getInstanceByDom(chartRef.current) ||
        echarts.init(chartRef.current);
      chart.setOption(option);
      return () => {
        chart.dispose();
      };
    }
  }, []);

  return (
    <div>
      home 入口文件
      <div ref={chartRef} style={{ width: "400px", height: "400px" }} />
    </div>
  );
};

export default Main;
```

## 封装 echart 组件

## 封装 echart hooks
