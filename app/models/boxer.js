const mongoose = require('mongoose')

const boxerSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		nationality: {
			type: String,
			require: true
		},
		record: {
			type: String,
			required: true,
		},
		active: {
			type: Boolean,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Boxer', boxerSchema)
