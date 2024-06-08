import animationData from "@assets/lotties/404.json";
import Template from "@components/ServerResponse/Template";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Template
        lottie={animationData}
        message={"No pudimos encontrar esta página"}
        title={404}
      />
    </div>
  );
}
