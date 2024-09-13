import React from 'react';
import { Popover, Button, Space } from 'concis';

const CustomTooltip = () => (
  <div style={{ padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>
    <h4 style={{ margin: 0, color: '#1d2129' }}>Custom Tooltip</h4>
    <p style={{ margin: '5px 0', color: '#4e5969' }}>This is a custom tooltip component.</p>
    <p style={{ margin: '5px 0', color: '#4e5969' }}>You can customize this as needed.</p>
  </div>
);

export default function CustomTooltipDemo() {
  return (
    <Space>
      <Popover
        type="click"
        style={{ padding: '0 0 15px 15px' }}
        align="bottom"
        customTooltip={<CustomTooltip />}
      >
        <Button type="primary" width={120} height={30}>
          Click with Custom Tooltip
        </Button>
      </Popover>
      <Popover
        type="hover"
        style={{ padding: '0 0 15px 15px' }}
        align="top"
        customTooltip={<CustomTooltip />}
      >
        <Button type="primary" width={120} height={30}>
          Hover with Custom Tooltip
        </Button>
      </Popover>
    </Space>
  );
}

