import React, { Component } from 'react'
import { Text, View, Image,Platform } from 'react-native'

const CategoryCard = ({ categoryImage, title }) => {

    const { cardWrapper, cardWrapperForAndroid ,image, titleWrapper,text } = styles;

    return (
        <View style={Platform.OS == "android" ? cardWrapperForAndroid : cardWrapper }>
            <Image style={image} source={categoryImage} />
            <View style={titleWrapper}>
                <Text style={text}>{title}</Text>
            </View>
        </View>
    )
}

const styles = {
  cardWrapper: {
    flexDirection:"row",
    backgroundColor:"white",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding:5,
    marginRight:15
  },
  cardWrapperForAndroid: {
    flexDirection:"row",
    borderRadius: 12,
    borderColor:"#D6D6D6",
    borderWidth:0.5,
    padding:5,
    marginRight:15,
  },
  image: {
    height: 70,
    width:50,
    borderRadius:6,
    marginRight:10
  },
  titleWrapper:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text:{
    fontWeight: "bold",
    marginRight:25
  }
}

export { CategoryCard }