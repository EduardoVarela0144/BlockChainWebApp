import animationData from "@assets/lotties/Pending.json";
import Template from "@components/ServerResponse/Template";

export default function AccountInReview() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Template
        lottie={animationData}
        message={"Tu cuenta aún no es aprobada por el administrador"}
        title={"Revisión"}
      />
    </div>
  )
}
