import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useForm, ValidationError } from "@formspree/react";
import { useRef, useEffect } from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mldqldzg");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();
    }
  }, [state.succeeded]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".contact-header", {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: "power2.out",
    })
      .from(
        ".form-field",
        { opacity: 0, x: -30, stagger: 0.2, duration: 0.6 },
        "-=0.5"
      )
      .from(".submit-btn", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3");
  }, []);

  return (
    <section className="contact-section bg-tetiary  gap-50 md:my-10 md:mx-30 p-7 md:p-10 space-y-7">
      <div className="contact-header">
        <h3 className="text-primary font-bold text-3xl">Let’s Talk</h3>
        <p className="text-secondary text-sm md:text-2xl">
          Let’s collaborate! Reach out if you would like to work on a project.
        </p>
      </div>
      {state.succeeded && (
        <p className="text-primary text-center font-bold">
          Thanks for your message!
        </p>
      )}
      <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name</label> <br />
          <input
            type="text"
            name="name"
            className="bg-white rounded-lg w-full p-4 mt-2"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email Address</label> <br />
          <input
            type="email"
            name="email"
            className="bg-white rounded-lg w-full p-4 mt-2"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="form-field">
          <label htmlFor="Message">Message</label> <br />
          <textarea
            name="message"
            className="bg-white rounded-lg w-full p-4 mt-2 h-50 "
          />
          <ValidationError
            prefix="Message"
            field="Message"
            errors={state.errors}
          />
        </div>

        <div className="submit-btn">
          <button
            type="submit"
            className="bg-primary text-white px-20 py-4 rounded-lg w-full md:w-fit cursor-pointer hover:scale-105"
            disabled={state.submitting}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};
export default Contact;
