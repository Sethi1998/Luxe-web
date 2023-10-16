import Layout from "../common/Layout";
import Container from "../common/Container";
import { Step1 } from "./Step1";
import { useState } from "react";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";
import { Hostlayout } from "../common/Layout/Hostlayout";
import { Step5 } from "./Step5";

export const ListCar = () => {
  const [formStep, setFormStep] = useState({
    step1: true,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
  });
  const [formData, setFormData] = useState<any>({});
  const count = formStep.step1
    ? 1
    : formStep.step2
    ? 2
    : formStep.step3
    ? 3
    : formStep.step4
    ? 4
    : 5;

  return (
    <Hostlayout>
      <Container>
        <div className="flex justify-center mt-10 text-white w-full">
          <div className="flex flex-col gap-4 bg-primary p-6 rounded-xl lg:w-[600px] w-full">
            <div>
              <h2 className="font-bold text-xl">List Your Car</h2>
              <span>{count} of 5 steps</span>
            </div>
            {formStep.step1 && (
              <Step1
                setFormStep={setFormStep}
                formStep={formStep}
                formData={formData}
                setFormData={setFormData}
              />
            )}
            {formStep.step2 && (
              <Step2
                setFormStep={setFormStep}
                formStep={formStep}
                formData={formData}
                setFormData={setFormData}
              />
            )}
            {formStep.step3 && (
              <Step3
                setFormStep={setFormStep}
                formStep={formStep}
                formData={formData}
                setFormData={setFormData}
              />
            )}
            {formStep.step4 && (
              <Step4
                setFormStep={setFormStep}
                formStep={formStep}
                formData={formData}
                setFormData={setFormData}
              />
            )}
            {formStep.step5 && (
              <Step5
                setFormStep={setFormStep}
                formStep={formStep}
                formData={formData}
                setFormData={setFormData}
              />
            )}
          </div>
        </div>
      </Container>
    </Hostlayout>
  );
};
