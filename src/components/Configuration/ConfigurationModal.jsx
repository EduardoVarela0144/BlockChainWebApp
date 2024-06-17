import React, { useState, useEffect, useContext } from "react";
import { Modal, Radio } from "antd";
import { ApiContext } from "@context/ApiContext";

const API_OPTIONS = {
  LOCAL: {
    id: "LOCAL",
    VITE_API_URL: import.meta.env["VITE_API_URL"],
    VITE_API_ELASTIC_URL: import.meta.env["VITE_API_ELASTIC_URL"],
  },
  UTM: {
    id: "UTM",
    VITE_API_URL: "http://192.168.241.210:5000",
    VITE_API_ELASTIC_URL: "http://192.168.241.210:9200",
  },
  EXTERNAL: {
    id: "EXTERNAL",
    VITE_API_URL: "http://192.100.170.206:5000",
    VITE_API_ELASTIC_URL: "http://192.100.170.206:9200",
  },
};

export default function ConfigurationModal({ open, setOpen }) {
  const handleCancel = () => {
    setOpen(false);
  };

  const { Api, setApi } = useContext(ApiContext);

  useEffect(() => {
    if (!Api) {
      setApi(API_OPTIONS.LOCAL);
    }
  }, []);

  const [value, setValue] = useState(() => {
    if (Api) {
      return Api.id;
    }
    return API_OPTIONS.LOCAL.id;
  });

  useEffect(() => {
    if (Api) {
      setValue(Api.id);
    }
  }, [Api]);

  const onChange = (e) => {
    const selectedApi = API_OPTIONS[e.target.value];
    console.log("radio checked", selectedApi);
    setApi(selectedApi);
    setValue(selectedApi.id);
  };

  return (
    <Modal
      title="Selecciona desde donde quieres hacer las peticiones"
      open={open}
      onCancel={handleCancel}
      onOk={() => {
        const selectedApi = API_OPTIONS[value];
        setApi(selectedApi);
        setOpen(false);
      }}
      okText="Guardar"
    >
      <div className=" mb-4">
        <p>
          {Api?.VITE_API_URL
            ? `Flask URL : ${Api?.VITE_API_URL}`
            : "Flask URL no configurada"}
        </p>

        <p>
          {Api?.VITE_API_ELASTIC_URL
            ? `Elastic Search URL : ${Api?.VITE_API_ELASTIC_URL} `
            : "Elastic Search URL no configurada"}
        </p>
      </div>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={API_OPTIONS.LOCAL.id}>Local</Radio>
        <Radio value={API_OPTIONS.UTM.id}>UTM</Radio>
        <Radio value={API_OPTIONS.EXTERNAL.id}>Externo</Radio>
      </Radio.Group>
    </Modal>
  );
}
