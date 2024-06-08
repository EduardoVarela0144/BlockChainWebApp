import animationData from "@assets/lotties/Denied.json";
import Template from "@components/ServerResponse/Template";

export default function NotPermissions() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Template
        lottie={animationData}
        message={"No tienes permisos para ver este contenido"}
        title={403}
      />
    </div>
  );
}
