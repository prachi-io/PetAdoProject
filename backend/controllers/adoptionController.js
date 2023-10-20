const Adoption = require("../models/Adoption");
const Pet = require("../models/Pet");

exports.getAll = async (req, res) => {
  try {
    // Fetch all adoptions
    const adoptions = await Adoption.find();

    // Create an array to store the updated adoptions
    const updatedAdoptions = [];

    // Loop through each adoption and retrieve pet information
    for (let i = 0; i < adoptions.length; i++) {
      const petId = adoptions[i].pet; // Assuming 'pet' is the field in Adoption containing the pet ID

      // Make a request to the 'getOne' route for the specific pet ID
      const petInfo = await fetchPetInfo(petId);

      // Create a new adoption object with the pet information
      const updatedAdoption = { ...adoptions[i]._doc, petInfo };
      updatedAdoptions.push(updatedAdoption);
    }

    // Return the updated adoptions list
    res.json(updatedAdoptions);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

// Helper function to fetch pet information using the 'getOne' route
async function fetchPetInfo(petId) {
  try {
    // Make a request to the 'getOne' route for the pet ID
    const pet = await Pet.findById(petId).populate('category');
    return pet;
  } catch (error) {
    console.log(`Error fetching pet info for ID ${petId}: ${error}`);
    return null; // You can handle errors as needed
  }
}







exports.getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const adoption = await Adoption.findById(id);

    res.json(adoption);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.create = async (req, res) => {
  try {
    const { firstName, lastName, email, address, phone, pet } = req.body;

    const created = await Adoption.create({
      firstName,
      lastName,
      phone,
      email,
      address,
      pet,
    });

    res.json({ message: "Adooptions successfuly created.", created });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, address, phone, pet } = req.body;

    const created = await Adoption.findByIdAndUpdate(id, {
      firstName,
      lastName,
      phone,
      email,
      address,
      pet,
    },{new:true});

    res.json({ message: "Adoptions successfully updated.", created });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Adoption.findByIdAndRemove(id);

    res.json({ message: "Adoption succesfuly delete", deleted });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
