import { Field, Formik, Form } from "formik";

const Researcher: React.FC = () => {
  const handleFormSubmit = () => {};

  return (
    <div className="w-1000 bg-slate-400">
      <Formik
        initialValues={{
          depart: "",
          arrive: "",
          date: "",
          time: "",
          timeslot: "",
        }}
        onSubmit={handleFormSubmit}
      >
        <Form>
          <div className="flex flex-row bg-sky-500 justify-between">
            <label>Départ</label>
            <Field type="text" name="depart" placeholder="Paris" />
            <label>Arrivé</label>
            <Field type="text" name="arrive" placeholder="Lyon" />
          </div>
          <section>
            <label>Date</label>
            <Field type="date" name="date" />
            <label>Heure</label>
            <Field type="time" name="heure" />
            <label>Timeslot</label>
            <Field type="text" name="timeslot" />
          </section>
        </Form>
      </Formik>
    </div>
  );
};

export default Researcher;
