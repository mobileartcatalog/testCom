/*Id
	ArtistID
	Artist Name (auto-fills from logged in user name?)
	Inventory Number
	Title: ‘’
	Date: ‘’
	Dimensions: ‘’
	Medium: ‘’
	Tags: []
	Notes: ‘’
	Exhibitions: [
		{ id: ObjectID(‘1234’), title, venue, catalogueNumber },
]
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImgSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId
  },
  data: Buffer,
  contentType: String
});
//create schema
const ArtworkSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId
  },
  artistid: {
    type: Number
  },
  artistname: {
    type: String
    // required: true
  },
  inventorynumber: {
    type: Number
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: String
    // default: Date.now
  },
  dimensions: {
    type: Schema.Types.Decimal128
  },
  medium: {
    type: String
  },
  tags: {
    type: Array
  },
  note: {
    type: String
  },
  img1: {
    data: Buffer,
    contentType: String
  },
  img2: {
    data: Buffer,
    contentType: String
  },
  img3: {
    data: Buffer,
    contentType: String
  },
  img4: {
    data: Buffer,
    contentType: String
  },
  img5: {
    data: Buffer,
    contentType: String
  },
  artworkpics: [ImgSchema],
  exhibitions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Exhibitions'
    }
  ]
});

const Artworks = mongoose.model('Artworks', ArtworkSchema);
module.exports = Artworks;
