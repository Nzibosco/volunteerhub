module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    email: {
      type: DataTypes.email,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    streetAddress: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    }
    // // check AWS for saving images @ Amazon and then use AWS links to store the images in our local db
    // image: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1, 200]
    //   }
    // },
    // detail: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1, 100]
    //   }
    // },
    // price: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    //   // validate: {
    //   //   len: [1, 10]
    //   // }
    // }
  });

  return User;
};

