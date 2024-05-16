import { useState } from "react";

const useSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (formData) => {
    setIsLoading(true);
    try {
      // Simulating an API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulating successful or error response randomly (for demonstration purposes)
      const isSuccess = Math.random() < 0.5;
      if (isSuccess) {
        return { type: "success", message: "Form submitted successfully!" };
      } else {
        throw new Error("Submission failed. Please try again later.");
      }
    } catch (error) {
      return { type: "error", message: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, submit };
};

export default useSubmit;
