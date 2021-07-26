const Drink = require("../models/Drink.model");

module.exports.drinksController = {
  getDrinks: async (req, res) => {
    try {
      const data = await Drink.find();
      await res.json(
        data.map((e) => {
          const id = e.id;
          const name = e.name;
          const price = e.price;

          return { id, name, price };
        })
      );
    } catch (e) {
      if (e) throw e;

      res.json({
        error: `Ошибка при получении всех напитков`,
      });
    }
  },
  getDrinksInStock: async (req, res) => {
    try {
      const data = await Drink.find({ "isInStock": true });
      await res.json(data);
    } catch (e) {
      if (e) throw e;

      res.json({
        error: `Ошибка при напитка при получении напитков в наличии`,
      });
    }
  },
  getDrinkById: async (req, res) => {
    try {
      const data = await Drink.findById(req.params.id)
      await res.json(data)
    } catch (e) {
      if (e) throw e;

      res.json({
        error: `Ошибка при напитка с ID: ${req.params.id}`,
      });
    }
  },
  addDrink: async (req, res) => {
    try {
      await Drink.create({
        name: req.body.name,
        price: req.body.price,
        isInStock: req.body.isInStock,
        hasCaffeine: req.body.hasCaffeine,
        volume: req.body.volume,
        description: req.body.description,
      });

      await res.json("Напиток добавлен");
    } catch (e) {
      if (e) throw e;

      res.json({
        error: "Ошибка при добавлении нового напитка",
      });
    }
  },
  deleteDrinkById: async (req, res) => {
    try {
      await Drink.findByIdAndDelete(req.params.id);

      await res.json(`Напиток с ID ${req.params.id} удален`)
    } catch (e) {
      if (e) throw e;

      res.json({
        error: "Ошибка при удалении напитка",
      });
    }
  },
  updateDrinkById: async (req, res) => {
    try {
      await Drink.findByIdAndUpdate(req.params.id, req.body);

      await res.json(`Напиток с ID ${req.params.id} успешно отредактирован`)
    } catch (e) {
      if (e) throw e;

      res.json({
        error: `Ошибка при редактировании напитка с ID: ${req.params.id}`,
      });
    }
  },
};
