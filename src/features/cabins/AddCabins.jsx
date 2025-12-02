import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";

function AddCabins() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new Cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      {/* <Modal.Open opens="table">
        <Button>Show Table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window> */}
    </Modal>
  );
}

// function AddCabins() {
//   const [isOpenForm, setisOpenForm] = useState(false);

//   return (
//     <>
//       <Button onClick={() => setisOpenForm((show) => !show)}>
//         Add new Cabin
//       </Button>
//       {isOpenForm && (
//         <Modal onClose={() => setisOpenForm(false)}>
//           <CreateCabinForm onCloseForm={() => setisOpenForm(false)} />
//         </Modal>
//       )}
//     </>
//   );
// }

export default AddCabins;
