const Item = require('../models/Item');
const Treasure = require('../models/Activity');
const Traveler = require('../models/Booking');
const Category = require('../models/Category');

module.exports = {
  landingPage: async (req, res) => {
    try {
      const mostPicked = await Item.find()
        .select('_id title country city price unit imageId')
        .limit(5)
        .populate({ path: 'imageId', select: '_id imageUrl' });
      const category = await Category.find()
        .select('_id name')
        .limit(3)
        .populate({
          path: 'itemId',
          select: '_id title country city isPopular  imageId',
          options: { sort: { sumBooking: -1 }, limit: 4 },
          populate: {
            path: 'imageId',
            select: '_id imageUrl',
            perDocumentLimit: 1,
          },
        });
      const traveler = await Traveler.find();
      const treasure = await Treasure.find();
      const city = await Item.find();
      // set is popular true or false based on sumBooking
      // for (let i = 0; i < category.length; i += 1) {
      //   for (let x = 0; x < category[i].itemId.length; x += 1) {
      //     const item = await Item.findOne({ _id: category[i].itemId[x]._id });
      //     item.isPopular = false;
      //     await item.save();
      //     if (category[i].itemId[0] === category[i].itemId[x]) {
      //       item.isPopular = true;
      //       await item.save();
      //     }
      //   }
      // }
      const testimonial = {
        _id: 'asd1293uasdads1',
        imageUrl: 'images/testimonial2.jpg',
        name: 'Happy Family',
        rate: 4.55,
        content:
          'What a great trip with my family and I should try again next time soon ...',
        familyName: 'Angga',
        familyOccupation: 'Product Designer',
      };
      res.status(200).json({
        hero: {
          travelers: traveler.length,
          treasures: treasure.length,
          cities: city.length,
        },
        mostPicked,
        category,
        testimonial,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};