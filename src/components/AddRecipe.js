import { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function AddRecipe(props) {
  const [name, setName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState("")
  const [show, setShow] = useState(props.show);
  const handleClose = () => setShow(false);
 

  return (
    <div>
      <button
        onClick={props.toggleShow}
        className="block m-2 bg-sky-900 hover:bg-sky-700 text-white font-bold py-2 px-3 rounded"
      >
        + Add Recipe
      </button>
      <Modal
        show={props.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => {
              props.toggleShow();
              e.preventDefault();
              props.newRecipe(name, ingredients, instructions, image)
              setName('')
              setIngredients('')
              setInstructions('')
              setImage('')

            }}
            id="editmodal"
            className="w-full max-w-sm"
          >
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="name"
                >
                  Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="name"
                  type="text"
                  placeholder="Bread"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="ingredients"
                >
                  Ingredients
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="ingredients"
                  type="text"
                  placeholder="flour,eggs,milk"
                  value={ingredients}
                  onChange={(e) => {
                    let ingredientsInput = e.target.value;
                    setIngredients(ingredientsInput.split(','));
                  }}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="instructions"
                >
                  Instructions
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="instructions"
                  type="text"
                  placeholder="Place in oven"
                  value={instructions}
                  onChange={(e) => {
                    setInstructions(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="image"
                >
                  Image
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="image"
                  type="text"
                  placeholder="https://www.pexels.com/photo/sliced-bread-on-gray-surface-1775043/"
                  value={image}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-3 rounded"
            onClick={props.toggleShow}
          >
            Close
          </button>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-3 rounded"
            form="editmodal"
          >
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

