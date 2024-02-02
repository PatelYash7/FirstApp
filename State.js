import { Button,View,Text } from "react-native";
import React, { useState } from "react";

export default function State(props){
    const[hunger,setHungry]=useState(false)
    return(
        <View>
            <Text>{hunger?<View>
                <Text>I am so Soo Hungry</Text>
            </View>:<View>
                 <Text>I need Food</Text>
                </View>}</Text>
            <Button onPress={()=>{
                if(hunger==false) {setHungry(true)}else{
                    setHungry(false)
                }
            }}
            title={"Click To change the Hunger State"}
            />
        </View>
    )
}