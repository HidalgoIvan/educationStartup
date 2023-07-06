import { FunctionComponent, useEffect, useRef } from 'react';
import functionPlot from 'function-plot';
import styled from 'styled-components';

interface PlotGraphProps {
  formulas: string[];
}
const PlotGraph: FunctionComponent<PlotGraphProps> = ({ formulas }) => {
  const graphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = graphRef.current as HTMLElement;

    functionPlot({
      target: element,
      width: element.clientWidth - 20,
      height: 300,
      yAxis: { domain: [-2, 10] },
      xAxis: { domain: [-10, 10] },
      grid: true,
      disableZoom: false,
      tip: {
        xLine: true,
        yLine: true,
      },
      data: formulas.map((formula) => {
        return { fn: formula };
      }),
    });
  }, [formulas, graphRef]);

  return <GraphContainer ref={graphRef}></GraphContainer>;
};

const GraphContainer = styled.div`
  width: calc(100% - 20px);
  margin: 0 auto;
  text-align: center;
`;
export default PlotGraph;
