import { FunctionComponent, useEffect, useRef } from 'react';
import functionPlot from 'function-plot';
import styled from 'styled-components';

interface LineGraphProps {
  formula: string;
}
const LineGraph: FunctionComponent<LineGraphProps> = ({ formula }) => {
  const graphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = graphRef.current as HTMLElement;

    functionPlot({
      target: element,
      width: element.clientWidth,
      height: 300,
      yAxis: { domain: [-1, 5] },
      xAxis: { domain: [-5, 5] },
      grid: true,
      disableZoom: false,
      tip: {
        xLine: true,
        yLine: true,
      },
      data: [
        {
          fn: 'x^2',
        },
      ],
    });
  }, [formula, graphRef]);

  return <GraphContainer ref={graphRef}></GraphContainer>;
};

const GraphContainer = styled.div`
  width: calc(100% - 20px);
  margin: 0 auto;
`;
export default LineGraph;
