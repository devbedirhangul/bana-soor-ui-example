import React, { Component } from 'react'
import { Text, View, Image, SafeAreaView, TouchableOpacity, FlatList, ScrollView} from 'react-native'

//Packages
import axios from "axios";
import { Actions } from "react-native-router-flux";
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

export default class Profile extends Component {

    state = {
        user: {},
        visible: false,
        fakeData:[1,2,3]
    }

    componentDidMount() {
        axios.get("https://reqres.in/api/users/" + this.props.userId)
            .then(res => this.setState({user: res.data.data}))
            .catch(err => console.log(err));
        
        setTimeout(() => {
            this.setState({visible:true})
        }, 5000);
    }

    renderItem = () => {
        const { visible } = this.state;
        const { commentContainer, shimmerAvatar, shimmerText } = styles;
        return (
            <View style={commentContainer}>
                <View>
                    <ShimmerPlaceHolder visible={visible} autoRun style={shimmerAvatar}></ShimmerPlaceHolder>
                </View>
                <View style={{ marginLeft: 10 }}>
                    <ShimmerPlaceHolder visible={visible}  autoRun style={[shimmerText, { width: 200 }]}></ShimmerPlaceHolder>
                    <ShimmerPlaceHolder visible={visible}  autoRun style={[shimmerText, { width: 250 }]}></ShimmerPlaceHolder>
                    <ShimmerPlaceHolder visible={visible}  autoRun style={[shimmerText, { width: 150 }]}></ShimmerPlaceHolder>
                </View>
            </View>
        )
    }

    render() {
        const {
            icon,
            maintContainer,
            topContainer,
            boldText,
            childTopContainer,
            childTopContainerHeartandShare,
            avatarImage,
            container,
            descriptionWrapper,
            expertiseText,
            title,
            starIcon,
            rateContainer,
            commentContainer,
            priceContainer,
            priceTitle,
            miniWrapper,
            minute
        } = styles;


        return (
            <SafeAreaView style={maintContainer}>
                <ScrollView>
                <View style={topContainer}>
                    <TouchableOpacity onPress={() => Actions.home()} style={childTopContainer}>
                        <Image style={icon} source={require("../assets/icons/back_button.png")} />
                        <Text style={boldText}>Geri</Text>
                    </TouchableOpacity>
                    <View style={childTopContainerHeartandShare}>
                        <View style={{flexDirection:"row"}}>
                            <Image style={icon} source={require("../assets/icons/heart.png")} />
                            <Image style={icon} source={require("../assets/icons/share.png")} />
                        </View>
                    </View>
                </View>
                <View>
                    <View style={container}>
                        <Image style={avatarImage} source={{ uri: this.state.user.avatar }} />
                    </View>
                    <View style={container}>
                        <Text style={expertiseText}>İş veTicaret</Text>
                        <Text style={title}>Dijital Pazarlama Teknikleri</Text>
                        <View style={{flexDirection:"row"}}>
                            <Text>Op. Dr. M. Mustafa Ercan</Text>
                            <Text style={{ color: "#6BA1FF" }}> - İş İnsanı</Text>
                        </View>
                        <View style={descriptionWrapper}>
                            <Text style={{fontSize:15}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        </View>
                        <View style={rateContainer}>
                            <Text style={[boldText, {fontSize:18, marginRight:10}]}>Yorumlar</Text>
                            <Image style={starIcon} source={require("../assets/icons/star.png")} />
                            <Text style={[boldText, { fontSize: 18, marginRight: 10 }]}>5.0</Text>
                            <Text>(1000)</Text>
                        </View>
                    </View>
                    <View style={container}>
                        <FlatList
                            data={this.state.fakeData}
                            renderItem={this.renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    <View style={priceContainer}>
                        <View>
                            <Text style={priceTitle}>Görüşme Talebi</Text>
                        </View>
                        <View style={miniWrapper}>
                            <Text style={minute}> / Dakikası</Text>
                            <Text style={priceTitle}>₺8.67</Text>
                        </View>
                    </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = {
  maintContainer:{
    flex:1,
    backgroundColor:"white"
  },
  childTopContainer:{
    flexDirection:"row",
    alignItems:"center",
  },
  childTopContainerHeartandShare:{
    flex: 1,
    flexDirection: 'row-reverse'
  },
  icon: {
    height:25,
    width: 25,
    marginRight:15
  },
  topContainer:{
    padding:10,
    flexDirection:"row",
    borderBottomWidth:0.5,
    borderColor:"#D6D6D6"
  },
  boldText:{
    fontWeight:"bold"
  },
  avatarImage:{
    height: 200,
    width: "100%",
    borderRadius:12
  },
  container:{
    padding:15,
  },
  descriptionWrapper:{
    marginTop:10
  },
  expertiseText:{
    color:"#6BA1FF",
    fontWeight:"bold"
  },
  title:{
    fontSize:20,
    fontWeight:"bold",
    marginTop:8
  },
  rateContainer:{
    flexDirection:"row",
    marginTop:20,
    alignItems:"center"
  },
  starIcon:{
    height: 20, 
    width: 20,
    marginRight:5
  },
  shimmerText:{
    marginTop:3,
    borderRadius:3,
    height:10
  },
  shimmerAvatar:{
    height: 50,
    width: 50,
    borderRadius: 50 
  },
  commentContainer:{
    marginTop:5,
    flexDirection: "row",
    alignItems: "center"
  },
  priceContainer:{
    backgroundColor:"#2465f2",
    margin:15,
    padding:15,
    borderRadius:12,
    flexDirection:"row"
  },
  priceTitle:{
    fontSize:18,
    fontWeight:"bold",
    color:"white"
  },
  miniWrapper:{
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems:"center"
  },
  minute:{
    color:"white",
  }
}
