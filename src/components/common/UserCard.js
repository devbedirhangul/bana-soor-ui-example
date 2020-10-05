import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Actions } from "react-native-router-flux";

const UserCard = ({ userImage, firstName, lastName, userId }) => {

    const {
        userCard,
        avatar,
        roleTitle,
        textContainer,
        description,
        nameAndSureName,
        line,
        rateContainer,
        rateText,
        starIcon,
        priceContainer,
        priceText
    } = styles;

    return (
        <TouchableOpacity onPress={() => Actions.profile({userId:userId})} style={userCard}>
            <Image style={avatar} source={{ uri: userImage }} />
            <View style={textContainer}>
                <Text style={roleTitle}>Oyunculuk ve Diksiyon</Text>
                <Text style={description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                <Text style={nameAndSureName}>{firstName}{lastName} </Text>
                <View style={line}></View>
                <View>
                    <View style={{ flexDirection:"row"}}>
                        <View style={rateContainer}>
                            <Image style={starIcon} source={require("../../assets/icons/star.png")} />
                            <Text style={rateText}>5.0</Text>
                            <Text>(1000)</Text>
                        </View>
                        <View style={priceContainer}>
                            <Text style={priceText}>₺30</Text>
                            <Text >/ dakika</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = {
  userCard:{
    marginRight:10,
    marginTop:10,
    borderRadius:12,
    borderColor: "#D6D6D6",
    borderWidth: 0.5,
  },
  avatar:{
    borderTopLeftRadius:12,
    borderTopRightRadius: 12,
    height:150, 
    width:250
  },
  roleTitle:{
    fontWeight:"bold",
    fontSize:18,
    color:"#6BA1FF"
  },
  textContainer:{
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
      padding:10,
      width:250
  },
  description:{
    color: "#2D3640",
    fontWeight: "bold",
  },
  nameAndSureName:{
    marginTop:5
  },
  line:{
    height:1,
    width:"100%",
    backgroundColor:"#D6D6D6",
    marginTop:10
  },
  rateContainer:{
    flexDirection: "row",
    alignItems: "center", 
    marginTop:10,
    width:"60%"
  },
  rateText:{
      fontWeight:"bold"
  },
  starIcon:{
    height: 20, 
    width: 20,
    marginRight:5
  },
  priceContainer:{
    flexDirection: "row",
    alignItems: "center", 
    marginTop:10,
  },
  priceText:{
      fontWeight:"bold"
  }
}


export { UserCard }
