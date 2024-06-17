import React, { useState } from "react";
import { Modal, Radio } from "antd";

export default function ConfigurationModal({ open, setOpen }) {
  const handleCancel = () => {
    setOpen(false);
  };

  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Modal
      title="Selecciona desde donde quieres hacer las peticiones"
      open={open}
      onCancel={handleCancel}
      okText="Guardar"
    >
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>UTM</Radio>
        <Radio value={2}>Externo</Radio>
      </Radio.Group>
    </Modal>
  );
}
