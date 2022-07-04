import { Field, Formik, Form } from "formik";
import Image from "next/image";

const Researcher: React.FC = () => {
  const handleFormSubmit = () => {};

  const spanCss = "flex flex-row";
  const fieldCss = "bg-gray-200 p-2";
  const labelCss = "w-[200px] p-2";

  return (
    <div className="h-[800px] w-[600px] border-4 border-black text-xl">
      <Formik
        initialValues={{
          depart: "",
          arrive: "",
          date: "",
          time: "",
          profil: "",
        }}
        onSubmit={handleFormSubmit}
      >
        <Form className="flex flex-col p-12 justify-around h-full m-auto w-[90%]">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <span className={spanCss}>
                <label className={labelCss}>Départ</label>
                <Field
                  className={`${fieldCss} border-b-2 border-gray-400`}
                  type="text"
                  name="depart"
                  placeholder="Paris"
                />
              </span>
              <span className={spanCss}>
                <label className={labelCss}>Arrivé</label>
                <Field
                  className={fieldCss}
                  type="text"
                  name="arrive"
                  placeholder="Lyon"
                />
              </span>
            </div>
            <Image
              className="bg-[#8DE8FE]"
              src="https://www.clipartmax.com/png/middle/53-533155_revert-hand-drawn-arrows-comments-reverse-arrow.png"
              layout="fill"
            />
          </div>
          <span className={spanCss}>
            <label className={labelCss}>Environnement</label>
            <select name="env">
              <option>1</option>
              <option>2</option>
            </select>
          </span>
          <span className={spanCss}>
            <label className={labelCss}>Date</label>
            <Field className={fieldCss} type="date" name="date" />
          </span>
          <span className={spanCss}>
            <label className={labelCss}>Heure</label>
            <Field className={fieldCss} type="time" name="heure" />
          </span>
          <span className={spanCss}>
            <label className={labelCss}>Profil</label>
            <select name="env">
              <option>1</option>
              <option>2</option>
            </select>
          </span>
        </Form>
      </Formik>
    </div>
  );
};

export default Researcher;
