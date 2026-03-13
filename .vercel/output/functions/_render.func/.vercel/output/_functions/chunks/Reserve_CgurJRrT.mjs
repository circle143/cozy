import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent, b as createAstro } from './astro/server_D0HyJTHb.mjs';
import 'kleur/colors';
import { s as styles } from './index.fb34cc0b_B3YpzleN.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import Calendar from 'react-calendar';
import { ToastContainer, toast } from 'react-toastify';
import { parsePhoneNumberWithError } from 'libphonenumber-js';

const validateEmail = (email) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return emailRegex.test(email);
};
const validateName = (fullName) => {
  const pattern = /^[a-zA-Z]+(?:[' -][a-zA-Z]+)*$/;
  return pattern.test(fullName) && fullName.length >= 3;
};
const validateNumber = (number) => {
  const numberRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
  return numberRegex.test(number);
};

const timeSlots = [
  { value: 12, display: "12.00 PM" },
  { value: 12, display: "12.30 PM" },
  { value: 13, display: "1.00 PM" },
  { value: 13, display: "1.30 PM" },
  { value: 16, display: "4.00 PM" },
  { value: 16, display: "4.30 PM" },
  { value: 17, display: "5.00 PM" },
  { value: 17, display: "5.30 PM" },
  { value: 20, display: "8.00 PM" },
  { value: 20, display: "8.30 PM" },
  { value: 21, display: "9.00 PM" },
  { value: 21, display: "9.30 PM" }
];
const Finalform = ({
  formInput,
  setFormInput,
  children,
  handleSubmit,
  submitting
}) => {
  const handleChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setFormInput((prev) => ({ ...prev, [key]: value }));
  };
  return /* @__PURE__ */ jsx("div", { className: styles.form, children: /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        handleSubmit();
      },
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles.input, children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Name",
              onChange: handleChange,
              value: formInput.name,
              name: "name",
              required: true,
              disabled: submitting
            }
          ),
          formInput.nameError && /* @__PURE__ */ jsx("p", { className: "error", children: formInput.nameError })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles.inputGroup, children: [
          /* @__PURE__ */ jsxs("div", { className: styles.input, children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                placeholder: "Email",
                onChange: handleChange,
                value: formInput.email,
                name: "email",
                required: true,
                disabled: submitting
              }
            ),
            formInput.emailError && /* @__PURE__ */ jsx("p", { className: "error", children: formInput.emailError })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: styles.input, children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                inputMode: "tel",
                placeholder: "Phone number",
                onChange: handleChange,
                value: formInput.number,
                name: "number",
                required: true,
                disabled: submitting
              }
            ),
            formInput.numberError && /* @__PURE__ */ jsx("p", { className: "error", children: formInput.numberError })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: styles.input, children: /* @__PURE__ */ jsx(
          "textarea",
          {
            placeholder: "Please provide additional information",
            onChange: handleChange,
            value: formInput.info,
            name: "info",
            disabled: submitting
          }
        ) }),
        children
      ]
    }
  ) });
};
const TimeGuest = ({ setTimeGuest, timeGuest }) => {
  const now = /* @__PURE__ */ new Date();
  const peopleCount = () => {
    let elements = [];
    for (let i = 1; i <= 8; i++) {
      elements.push(
        /* @__PURE__ */ jsx(
          "button",
          {
            "data-selected": timeGuest.guest == i,
            onClick: () => {
              setTimeGuest((prev) => ({
                ...prev,
                guest: i,
                guestError: ""
              }));
            },
            children: i
          },
          i
        )
      );
    }
    return elements;
  };
  return /* @__PURE__ */ jsxs("div", { className: styles.selectionContainer, children: [
    /* @__PURE__ */ jsxs("div", { className: styles.time, children: [
      /* @__PURE__ */ jsx("h4", { children: "TIME" }),
      /* @__PURE__ */ jsx("div", { className: styles.list, children: timeSlots.map((item) => {
        return /* @__PURE__ */ jsx(
          "button",
          {
            "data-selected": item.display === timeGuest.time,
            disabled: now.getHours() >= item.value,
            onClick: () => setTimeGuest((prev) => ({
              ...prev,
              time: item.display,
              timeError: ""
            })),
            children: item.display
          },
          item.display
        );
      }) }),
      timeGuest.timeError && /* @__PURE__ */ jsx("p", { className: "error", children: timeGuest.timeError })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles.guest, children: [
      /* @__PURE__ */ jsx("h4", { children: "HOW MANY PEOPLE?" }),
      /* @__PURE__ */ jsx("div", { className: styles.list, children: peopleCount() }),
      timeGuest.guestError && /* @__PURE__ */ jsx("p", { className: "error", children: timeGuest.guestError })
    ] })
  ] });
};
const Reserve = () => {
  const [day, onChange] = useState(/* @__PURE__ */ new Date());
  const [step, setStep] = useState(1);
  const [timeGuest, setTimeGuest] = useState({
    time: "",
    guest: 0,
    timeError: "",
    guestError: ""
  });
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    number: "",
    info: "",
    nameError: "",
    emailError: "",
    numberError: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const currentDate = /* @__PURE__ */ new Date();
  const futureDate = new Date(currentDate.getTime() + 21 * 24 * 60 * 60 * 1e3);
  const getInfo = (step2) => {
    switch (step2) {
      case 1:
        return "Please Select a date";
      case 2:
        return "Select time and guests";
      case 3:
        return "Please fill with your details";
    }
  };
  const validateForm = () => {
    if (!validateName(formInput.name)) {
      setFormInput((prev) => {
        return { ...prev, nameError: "Invalid name provided." };
      });
      return false;
    }
    if (!validateEmail(formInput.email)) {
      setFormInput((prev) => {
        return { ...prev, emailError: "Invalid email provided." };
      });
      return false;
    }
    if (!validateNumber(formInput.number)) {
      setFormInput((prev) => {
        return { ...prev, numberError: "Invalid number" };
      });
      return false;
    }
    setFormInput((prev) => {
      return { ...prev, nameError: "", emailError: "", numberError: "" };
    });
    return true;
  };
  function toE164(phone) {
    try {
      const phoneNumber = parsePhoneNumberWithError(phone, "IN");
      if (!phoneNumber.isValid()) {
        throw new Error("Invalid phone number");
      }
      return phoneNumber.number;
    } catch (err) {
      setFormInput((prev) => {
        return { ...prev, numberError: "Invalid number" };
      });
      console.error("Error:", err);
      return null;
    }
  }
  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }
    let phone = toE164(formInput.number);
    if (!phone) {
      return;
    }
    setSubmitting(true);
    const payload = {
      name: formInput.name,
      date: day.toDateString(),
      time: timeGuest.time,
      guests: timeGuest.guest || 1,
      email: formInput.email,
      phone,
      message: formInput.info || "No additional information"
    };
    console.log("📦 Payload:", payload);
    let url = "/api/cozy-reservation";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then(async (res) => {
      console.log("📥 Response status:", res.status);
      const text = await res.text();
      console.log("📥 Response text:", text);
      if (!text) {
        return { success: true };
      }
      try {
        return JSON.parse(text);
      } catch (e) {
        console.log("⚠️ Not JSON, treating as success");
        return { success: true };
      }
    }).then((res) => {
      console.log("✅ Success:", res);
      toast.success("Thank you! Your reservation has been received.");
      setFormInput({
        name: "",
        email: "",
        number: "",
        info: "",
        nameError: "",
        emailError: "",
        numberError: ""
      });
      setTimeGuest({
        time: "",
        guest: 0,
        timeError: "",
        guestError: ""
      });
      onChange(/* @__PURE__ */ new Date());
      setStep(1);
    }).catch((err) => {
      console.error("❌ Error:", err);
      toast.error("❌ Something went wrong. Please try again.");
      setFormInput({
        name: "",
        email: "",
        number: "",
        info: "",
        nameError: "",
        emailError: "",
        numberError: ""
      });
      setTimeGuest({
        time: "",
        guest: 0,
        timeError: "",
        guestError: ""
      });
      onChange(/* @__PURE__ */ new Date());
      setStep(1);
    }).finally(() => setSubmitting(false));
  };
  const getItem = (step2) => {
    switch (step2) {
      case 1:
        return /* @__PURE__ */ jsx("div", { className: styles.calendar, children: /* @__PURE__ */ jsx(
          Calendar,
          {
            onChange,
            value: day,
            minDate: currentDate,
            maxDate: futureDate
          }
        ) });
      case 2:
        return /* @__PURE__ */ jsx(TimeGuest, { setTimeGuest, timeGuest });
      default:
        return /* @__PURE__ */ jsx(
          Finalform,
          {
            setFormInput,
            formInput,
            handleSubmit,
            submitting,
            children: /* @__PURE__ */ jsxs("div", { className: styles.infoAction, children: [
              step2 !== 1 && step2 <= 3 && !submitting && /* @__PURE__ */ jsx(
                "button",
                {
                  "data-type": "button",
                  "data-variant": "clear",
                  onClick: () => {
                    if (step2 != 1) setStep((prev) => prev - 1);
                  },
                  disabled: submitting,
                  children: "Prev"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  "data-type": "button",
                  "data-variant": "primary",
                  disabled: submitting,
                  children: submitting ? "Submitting..." : "Submit"
                }
              )
            ] })
          }
        );
    }
  };
  const validateTimeAndGuest = () => {
    if (timeGuest.time.length === 0) {
      setTimeGuest((prev) => {
        return {
          ...prev,
          timeError: "You need to select time to proceed."
        };
      });
      return false;
    }
    if (timeGuest.guest <= 0) {
      setTimeGuest((prev) => {
        return {
          ...prev,
          guestError: "You need to select guest to proceed."
        };
      });
      return false;
    }
    setTimeGuest((prev) => {
      return {
        ...prev,
        guestError: "",
        timeError: ""
      };
    });
    return true;
  };
  const handleStep = () => {
    if (step == 1 && day) {
      setStep(2);
      return;
    }
    if (step == 2) {
      if (!validateTimeAndGuest()) {
        return;
      }
      setStep(3);
      return;
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: styles.action, children: [
    /* @__PURE__ */ jsxs("div", { className: styles.heading, children: [
      /* @__PURE__ */ jsx("h2", { className: "clash-display", children: "Reserve a table" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "or Call us at",
        " ",
        /* @__PURE__ */ jsx("a", { "data-type": "link", href: "tel:9266158606", children: "+91 9266158606" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles.info, children: [
      /* @__PURE__ */ jsx("div", { className: styles.detail, children: /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsxs("span", { children: [
          step,
          " / 3 "
        ] }),
        getInfo(step)
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: styles.step, children: getItem(step) }),
      step != 3 && /* @__PURE__ */ jsxs("div", { className: styles.infoAction, children: [
        step !== 1 && step <= 3 && /* @__PURE__ */ jsx(
          "button",
          {
            "data-type": "button",
            "data-variant": "clear",
            onClick: () => {
              if (step != 1) setStep((prev) => prev - 1);
            },
            children: "Prev"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            "data-type": "button",
            "data-variant": "primary",
            onClick: handleStep,
            children: step == 3 ? "Submit" : "Next"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(ToastContainer, {})
  ] });
};

const $$Astro = createAstro();
const $$Reserve = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Reserve;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(styles.reserve, "class")}${addAttribute(title, "data-title")}> <div${addAttribute(`container ${styles.container}`, "class")}> <div${addAttribute(styles.image, "class")}> <img src="/home/reserve.png" alt=""> </div> ${renderComponent($$result, "ReserveAction", Reserve, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/setha/OneDrive/Desktop/cozy/src/components/reserve/Reserve", "client:component-export": "default" })} </div> </div>`;
}, "C:/Users/setha/OneDrive/Desktop/cozy/src/components/reserve/Reserve.astro", void 0);

export { $$Reserve as $ };
