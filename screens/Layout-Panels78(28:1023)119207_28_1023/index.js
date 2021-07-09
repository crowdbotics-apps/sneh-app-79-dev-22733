import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_28_1024} />
      <View style={styles.View_28_1031}>
        <Text style={styles.Text_28_1031}>secondary nav</Text>
      </View>
      <View style={styles.View_28_1032} />
      <View style={styles.View_28_1033}>
        <View style={styles.View_28_1034}>
          <View style={styles.View_28_1035}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3292/0d89/1f9fa84df59bd9de0ca83419f634c292"
              }}
              style={styles.ImageBackground_28_1036}
            />
            <View style={styles.View_28_1037}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8e3/a650/5c586e9ce839dc2623ee27d433aad132"
                }}
                style={styles.ImageBackground_28_1038}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea3/115f/bd7efe815fceeeb8e26cc53554552b0b"
                }}
                style={styles.ImageBackground_28_1039}
              />
            </View>
            <View style={styles.View_28_1040}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea3/115f/bd7efe815fceeeb8e26cc53554552b0b"
                }}
                style={styles.ImageBackground_28_1041}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cd5/5d65/13a41a7408223ef692ddf55ab2276a90"
                }}
                style={styles.ImageBackground_28_1042}
              />
            </View>
            <View style={styles.View_28_1043}>
              <View style={styles.View_28_1044}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65d0/435a/a0a2465cc4f5d29b73fc0efffd3203fb"
                  }}
                  style={styles.ImageBackground_28_1045}
                />
                <View style={styles.View_28_1046}>
                  <Text style={styles.Text_28_1046}>
                    Iphone 11 Pro Max 414 px 896 px
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06e5/e82c/fa1df0e483f28bc7640260f791b0debf"
                }}
                style={styles.ImageBackground_28_1047}
              />
            </View>
            <View style={styles.View_28_1048}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f2a/0d00/cf7445148d923a6c658105e1f7feb5ab"
                }}
                style={styles.ImageBackground_28_1049}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f2a/0d00/cf7445148d923a6c658105e1f7feb5ab"
                }}
                style={styles.ImageBackground_28_1050}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bae9/73cd/ad6584a7ec9a51d671c3568db27f98cf"
                }}
                style={styles.ImageBackground_28_1051}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bae9/73cd/ad6584a7ec9a51d671c3568db27f98cf"
                }}
                style={styles.ImageBackground_28_1052}
              />
              <View style={styles.View_28_1053} />
              <View style={styles.View_28_1054} />
              <View style={styles.View_28_1055} />
              <View style={styles.View_28_1056} />
            </View>
            <View style={styles.View_28_1057}>
              <View style={styles.View_28_1058} />
              <View style={styles.View_28_1059} />
              <View style={styles.View_28_1060}>
                <Text style={styles.Text_28_1060}>Zoom 100%</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93af/ce08/cbefa422c80a897dcf117d1ae1855b22"
        }}
        style={styles.ImageBackground_28_1061}
      />
      <View style={styles.View_28_1062}>
        <View style={styles.View_28_1063} />
        <View style={styles.View_28_1064} />
        <View style={styles.View_28_1065}>
          <Text style={styles.Text_28_1065}>Sign Up</Text>
        </View>
      </View>
      <View style={styles.View_28_1066}>
        <View style={styles.View_28_1067} />
        <View style={styles.View_28_1068}>
          <Text style={styles.Text_28_1068}>Username</Text>
        </View>
        <View style={styles.View_28_1069} />
        <View style={styles.View_28_1070}>
          <Text style={styles.Text_28_1070}>abc</Text>
        </View>
      </View>
      <View style={styles.View_28_1071}>
        <View style={styles.View_28_1072} />
        <View style={styles.View_28_1073}>
          <Text style={styles.Text_28_1073}>Password error</Text>
        </View>
      </View>
      <View style={styles.View_28_1074}>
        <View style={styles.View_28_1075} />
        <View style={styles.View_28_1076}>
          <Text style={styles.Text_28_1076}>Password</Text>
        </View>
        <View style={styles.View_28_1077} />
        <View style={styles.View_28_1078}>
          <Text style={styles.Text_28_1078}>***</Text>
        </View>
      </View>
      <View style={styles.View_28_1079}>
        <View style={styles.View_28_1080} />
        <View style={styles.View_28_1081} />
        <View style={styles.View_28_1082}>
          <Text style={styles.Text_28_1082}>***</Text>
        </View>
        <View style={styles.View_28_1083}>
          <Text style={styles.Text_28_1083}>Validate Password</Text>
        </View>
      </View>
      <View style={styles.View_28_1084}>
        <View style={styles.View_28_1085}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7a0/5ed6/6f2a7ebdd170ca737868dcc29bfdb00f"
            }}
            style={styles.ImageBackground_28_1086}
          />
          <View style={styles.View_28_1087}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cc6/24b9/8139ca9e37f930d0ec3fa677e8beca39"
              }}
              style={styles.ImageBackground_28_1088}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_28_1092}>
        <View style={styles.View_28_1093}>
          <View style={styles.View_28_1094} />
          <View style={styles.View_28_1095} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
            }}
            style={styles.ImageBackground_28_1096}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f34a/2c2b/c7e7f301dd64736fc18906603e2e36df"
            }}
            style={styles.ImageBackground_28_1097}
          />
          <View style={styles.View_28_1098}>
            <Text style={styles.Text_28_1098}>Logic elements</Text>
          </View>
        </View>
        <View style={styles.View_28_1099}>
          <View style={styles.View_28_1100} />
          <View style={styles.View_28_1101} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4017/21d4/92811b55dfc3399a398feab0d0f822d7"
            }}
            style={styles.ImageBackground_28_1102}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05b2/5ae6/38da62105a984cb8d31dcdddaa5f7443"
            }}
            style={styles.ImageBackground_28_1103}
          />
          <View style={styles.View_28_1104}>
            <Text style={styles.Text_28_1104}>Actions</Text>
          </View>
        </View>
        <View style={styles.View_28_1105}>
          <View style={styles.View_28_1106} />
          <View style={styles.View_28_1107}>
            <Text style={styles.Text_28_1107}>
              Lorem ipsum dolor sit amet, consectet adipiscing elit.{" "}
            </Text>
          </View>
          <View style={styles.View_28_1108}>
            <Text style={styles.Text_28_1108}>Call endpoint</Text>
          </View>
        </View>
        <View style={styles.View_28_1109}>
          <View style={styles.View_28_1110} />
          <View style={styles.View_28_1111}>
            <Text style={styles.Text_28_1111}>
              Lorem ipsum dolor sit amet, consectet adipiscing elit.{" "}
            </Text>
          </View>
          <View style={styles.View_28_1112}>
            <Text style={styles.Text_28_1112}>Set element property</Text>
          </View>
        </View>
        <View style={styles.View_28_1113}>
          <View style={styles.View_28_1114} />
          <View style={styles.View_28_1115}>
            <Text style={styles.Text_28_1115}>
              Lorem ipsum dolor sit amet, consectet adipiscing elit.{" "}
            </Text>
          </View>
          <View style={styles.View_28_1116}>
            <Text style={styles.Text_28_1116}>Navigate to screen</Text>
          </View>
        </View>
        <View style={styles.View_28_1117}>
          <View style={styles.View_28_1118} />
          <View style={styles.View_28_1119}>
            <Text style={styles.Text_28_1119}>
              Lorem ipsum dolor sit amet, consectet adipiscing elit.{" "}
            </Text>
          </View>
          <View style={styles.View_28_1120}>
            <Text style={styles.Text_28_1120}>Send email</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_28_1121}>
        <View style={styles.View_28_1122}>
          <View style={styles.View_28_1123} />
          <View style={styles.View_28_1124}>
            <Text style={styles.Text_28_1124}>Cancel</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_28_1125}>
        <View style={styles.View_28_1126}>
          <View style={styles.View_28_1127} />
          <View style={styles.View_28_1128} />
          <View style={styles.View_28_1129}>
            <Text style={styles.Text_28_1129}>save</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_28_1130}>
        <View style={styles.View_28_1131}>
          <View style={styles.View_28_1132} />
          <View style={styles.View_28_1133}>
            <Text style={styles.Text_28_1133}>properties</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_28_1134}>
        <View style={styles.View_28_1135}>
          <View style={styles.View_28_1136} />
          <View style={styles.View_28_1137}>
            <Text style={styles.Text_28_1137}>figma import</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_28_1138}>
        <View style={styles.View_28_1139}>
          <View style={styles.View_28_1140} />
          <View style={styles.View_28_1141}>
            <Text style={styles.Text_28_1141}>Connectors</Text>
          </View>
        </View>
        <View style={styles.View_28_1142}>
          <View style={styles.View_28_1143} />
          <View style={styles.View_28_1144} />
          <View style={styles.View_28_1145}>
            <Text style={styles.Text_28_1145}>Functions</Text>
          </View>
        </View>
        <View style={styles.View_28_1146}>
          <View style={styles.View_28_1147} />
          <View style={styles.View_28_1148}>
            <Text style={styles.Text_28_1148}>Design</Text>
          </View>
        </View>
        <View style={styles.View_28_1149}>
          <View style={styles.View_28_1150} />
          <View style={styles.View_28_1151}>
            <Text style={styles.Text_28_1151}>Editor</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_28_1152}>
        <View style={styles.View_I28_1152_5_71} />
      </View>
      <View style={styles.View_28_1153}>
        <View style={styles.View_I28_1153_5_73} />
        <View style={styles.View_I28_1153_5_74} />
        <View style={styles.View_I28_1153_5_75} />
        <View style={styles.View_I28_1153_5_76} />
        <View style={styles.View_I28_1153_5_77} />
        <View style={styles.View_I28_1153_5_78} />
        <View style={styles.View_I28_1153_5_79} />
        <View style={styles.View_I28_1153_5_80} />
        <View style={styles.View_I28_1153_5_81}>
          <Text style={styles.Text_I28_1153_5_81}>main nav</Text>
        </View>
      </View>
      <View style={styles.View_28_1154} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3486/062b/f30ae9bfa8cfb4121baa42087fe0505e"
        }}
        style={styles.ImageBackground_28_1155}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/593e/cfd2/2d8b6205322d555dcbf8dcaeedeeb787"
        }}
        style={styles.ImageBackground_28_1156}
      />
      <View style={styles.View_28_1159}>
        <View style={styles.View_28_1160}>
          <View style={styles.View_28_1161}>
            <View style={styles.View_28_1162} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/601a/6da7/3844dd02345cbc27d2475dac586258f0"
              }}
              style={styles.ImageBackground_28_1163}
            />
          </View>
        </View>
        <View style={styles.View_28_1164}>
          <Text style={styles.Text_28_1164}>if</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b2d/c3a8/37d181acc01cfdde353591a2944d812c"
          }}
          style={styles.ImageBackground_28_1165}
        />
      </View>
      <View style={styles.View_28_1166}>
        <View style={styles.View_28_1167}>
          <View style={styles.View_28_1168}>
            <View style={styles.View_28_1169} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/601a/6da7/3844dd02345cbc27d2475dac586258f0"
              }}
              style={styles.ImageBackground_28_1170}
            />
          </View>
        </View>
        <View style={styles.View_28_1171}>
          <Text style={styles.Text_28_1171}>if</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b2d/c3a8/37d181acc01cfdde353591a2944d812c"
          }}
          style={styles.ImageBackground_28_1172}
        />
      </View>
      <View style={styles.View_28_1176}>
        <View style={styles.View_28_1177}>
          <View style={styles.View_28_1178}>
            <View style={styles.View_28_1179} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fc4/4bc8/38e926dfa2b4247fad7e9fb0564838e9"
              }}
              style={styles.ImageBackground_28_1180}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fc4/4bc8/38e926dfa2b4247fad7e9fb0564838e9"
              }}
              style={styles.ImageBackground_28_1181}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/601a/6da7/3844dd02345cbc27d2475dac586258f0"
              }}
              style={styles.ImageBackground_28_1182}
            />
          </View>
        </View>
        <View style={styles.View_28_1183}>
          <Text style={styles.Text_28_1183}>Else</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b2d/c3a8/37d181acc01cfdde353591a2944d812c"
          }}
          style={styles.ImageBackground_28_1184}
        />
      </View>
      <View style={styles.View_28_1185}>
        <View style={styles.View_28_1186}>
          <View style={styles.View_28_1187}>
            <View style={styles.View_28_1188} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9137/6918/9666157dded8adf1a56d88d6ff26188d"
              }}
              style={styles.ImageBackground_28_1189}
            />
          </View>
        </View>
        <View style={styles.View_28_1190}>
          <Text style={styles.Text_28_1190}>Navigate</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b2d/c3a8/37d181acc01cfdde353591a2944d812c"
          }}
          style={styles.ImageBackground_28_1191}
        />
      </View>
      <View style={styles.View_28_1192}>
        <View style={styles.View_28_1193}>
          <View style={styles.View_28_1194}>
            <View style={styles.View_28_1195} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9137/6918/9666157dded8adf1a56d88d6ff26188d"
              }}
              style={styles.ImageBackground_28_1196}
            />
          </View>
        </View>
        <View style={styles.View_28_1197}>
          <Text style={styles.Text_28_1197}>Navigate</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/359c/a355/a3d3835d85c2977b770c9c3e63650d22"
          }}
          style={styles.ImageBackground_28_1198}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fc4/4bc8/38e926dfa2b4247fad7e9fb0564838e9"
          }}
          style={styles.ImageBackground_28_1199}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fc4/4bc8/38e926dfa2b4247fad7e9fb0564838e9"
          }}
          style={styles.ImageBackground_28_1200}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c2c/9788/6363a24278067612b18651648a5f8a23"
          }}
          style={styles.ImageBackground_28_1201}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fc4/4bc8/38e926dfa2b4247fad7e9fb0564838e9"
          }}
          style={styles.ImageBackground_28_1202}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b2d/c3a8/37d181acc01cfdde353591a2944d812c"
          }}
          style={styles.ImageBackground_28_1203}
        />
      </View>
      <View style={styles.View_28_1204}>
        <View style={styles.View_28_1205}>
          <View style={styles.View_28_1206}>
            <View style={styles.View_28_1207} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9137/6918/9666157dded8adf1a56d88d6ff26188d"
              }}
              style={styles.ImageBackground_28_1208}
            />
          </View>
        </View>
        <View style={styles.View_28_1209}>
          <Text style={styles.Text_28_1209}>Activate</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b2d/c3a8/37d181acc01cfdde353591a2944d812c"
          }}
          style={styles.ImageBackground_28_1210}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e843/9b91/b9c91df3abb2f668be8ea621d402971a"
        }}
        style={styles.ImageBackground_28_1211}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cec1/2b30/bef1c8a39cd5691c9580e4c0b50f807d"
        }}
        style={styles.ImageBackground_28_1215}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f0b/dad7/4501bb0185a1dd84430e3d28eb5f5cb4"
        }}
        style={styles.ImageBackground_28_1219}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69f7/81f1/cce00276552efcd49b363b9a1187b939"
        }}
        style={styles.ImageBackground_28_1223}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd8f/baa6/1d43666ca035a9d7de7d0d8d2984bb08"
        }}
        style={styles.ImageBackground_28_1227}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7863/0dce/d8cf1578b0087b8de82a7cc41db9cbf4"
        }}
        style={styles.ImageBackground_28_1231}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d891/c1a6/a9af16719c36245429de5eacbdc47647"
        }}
        style={styles.ImageBackground_28_1235}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("147.54098360655738%") },
  View_28_1024: {
    width: wp("36.857638888888886%"),
    minWidth: wp("36.857638888888886%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.40625%"),
    top: hp("8.19672131147541%")
  },
  View_28_1031: {
    width: wp("2.08333412806193%"),
    minWidth: wp("2.08333412806193%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2777777777777778%"),
    top: hp("63.934426229508205%"),
    justifyContent: "center"
  },
  Text_28_1031: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_28_1032: {
    width: wp("97.43055555555556%"),
    minWidth: wp("97.43055555555556%"),
    height: hp("147.81420765027323%"),
    minHeight: hp("147.81420765027323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.569444444444444%"),
    top: hp("-0.273224043715847%"),
    backgroundColor: "rgba(233, 224, 248, 1)"
  },
  View_28_1033: {
    width: wp("96.66666666666667%"),
    minWidth: wp("96.66666666666667%"),
    height: hp("5.327889697799266%"),
    minHeight: hp("5.327889697799266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("15.16390107368511%")
  },
  View_28_1034: {
    width: wp("96.66666666666667%"),
    minWidth: wp("96.66666666666667%"),
    height: hp("5.327889697799266%"),
    minHeight: hp("5.327889697799266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_1035: {
    width: wp("96.66666666666667%"),
    minWidth: wp("96.66666666666667%"),
    height: hp("5.327889697799266%"),
    minHeight: hp("5.327889697799266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_28_1036: {
    width: wp("96.66666666666667%"),
    minWidth: wp("96.66666666666667%"),
    height: hp("5.327889697799266%"),
    minHeight: hp("5.327889697799266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_1037: {
    width: wp("1.990052064259847%"),
    minWidth: wp("1.990052064259847%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.16666666666667%"),
    top: hp("1.775956284153004%")
  },
  ImageBackground_28_1038: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_28_1039: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333286%"),
    top: hp("0.8196721311475414%")
  },
  View_28_1040: {
    width: wp("1.990052064259847%"),
    minWidth: wp("1.990052064259847%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.54560682508681%"),
    top: hp("1.775956284153004%")
  },
  ImageBackground_28_1041: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333286%"),
    top: hp("0.6830601092896167%")
  },
  ImageBackground_28_1042: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_28_1043: {
    width: wp("20.416666666666668%"),
    minWidth: wp("20.416666666666668%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.763888888888886%"),
    top: hp("1.635275251878415%")
  },
  View_28_1044: {
    width: wp("17.96227349175347%"),
    minWidth: wp("17.96227349175347%"),
    height: hp("1.6376542263343685%"),
    minHeight: hp("1.6376542263343685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2753252540129765%")
  },
  ImageBackground_28_1045: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.430555555555557%"),
    top: hp("0.5483158299180317%")
  },
  View_28_1046: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    minHeight: hp("1.6376542263343685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_28_1046: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_28_1047: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.236111111111114%"),
    top: hp("0%")
  },
  View_28_1048: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.59722222222223%"),
    top: hp("1.6393442622950793%")
  },
  ImageBackground_28_1049: {
    width: wp("0.8077485693825616%"),
    minWidth: wp("0.8077485693825616%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3106689453125%"),
    top: hp("0.48891494834358085%")
  },
  ImageBackground_28_1050: {
    width: wp("0.8077485693825616%"),
    minWidth: wp("0.8077485693825616%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3106689453125%"),
    top: hp("1.9557264984631146%")
  },
  ImageBackground_28_1051: {
    width: wp("0.0000012177165192244704%"),
    minWidth: wp("0.0000012177165192244704%"),
    height: hp("1.1001051449384844%"),
    minHeight: hp("1.1001051449384844%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9320237901475679%"),
    top: hp("0.6111520235655767%")
  },
  ImageBackground_28_1052: {
    width: wp("0.0000012177165192244704%"),
    minWidth: wp("0.0000012177165192244704%"),
    height: hp("1.1001051449384844%"),
    minHeight: hp("1.1001051449384844%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1864115397135322%"),
    top: hp("0.6111520235655767%")
  },
  View_28_1053: {
    width: wp("0.43494151698218453%"),
    minWidth: wp("0.43494151698218453%"),
    height: hp("0.8556373132382585%"),
    minHeight: hp("0.8556373132382585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 220, 231, 1)",
    borderWidth: 1
  },
  View_28_1054: {
    width: wp("0.43494151698218453%"),
    minWidth: wp("0.43494151698218453%"),
    height: hp("0.8556373132382585%"),
    minHeight: hp("0.8556373132382585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.4667781975751382%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 220, 231, 1)",
    borderWidth: 1
  },
  View_28_1055: {
    width: wp("0.43494151698218453%"),
    minWidth: wp("0.43494151698218453%"),
    height: hp("0.8556373132382585%"),
    minHeight: hp("0.8556373132382585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7456122504340215%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 220, 231, 1)",
    borderWidth: 1
  },
  View_28_1056: {
    width: wp("0.43494151698218453%"),
    minWidth: wp("0.43494151698218453%"),
    height: hp("0.8556373132382585%"),
    minHeight: hp("0.8556373132382585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7456122504340215%"),
    top: hp("1.4667781975751382%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 220, 231, 1)",
    borderWidth: 1
  },
  View_28_1057: {
    width: wp("14.652777777777779%"),
    minWidth: wp("14.652777777777779%"),
    height: hp("2.183538968445825%"),
    minHeight: hp("2.183538968445825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.625%"),
    top: hp("1.6393442622950793%")
  },
  View_28_1058: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("0.5458847421114562%"),
    minHeight: hp("0.5458847421114562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.9722222222222285%"),
    top: hp("0.8188049649931699%"),
    backgroundColor: "rgba(214, 220, 231, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_28_1059: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    height: hp("1.3647118552786406%"),
    minHeight: hp("1.3647118552786406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0.40940248249658495%"),
    backgroundColor: "rgba(119, 122, 243, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_28_1060: {
    width: wp("4.722222222222222%"),
    minWidth: wp("4.722222222222222%"),
    minHeight: hp("2.183538968445825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_28_1060: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_28_1061: {
    width: wp("78.47222222222221%"),
    minWidth: wp("78.47222222222221%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.52777777777778%"),
    top: hp("20.76502732240437%")
  },
  View_28_1062: {
    width: wp("8.472222222222223%"),
    minWidth: wp("8.472222222222223%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.23611111111111%"),
    top: hp("34.42622950819672%")
  },
  View_28_1063: {
    width: wp("8.472222222222223%"),
    minWidth: wp("8.472222222222223%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_28_1064: {
    width: wp("2.083333333333333%"),
    height: hp("2.185792349726776%"),
    top: hp("2.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%"),
    backgroundColor: "rgba(93, 94, 124, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_28_1065: {
    width: wp("2.8472222222222223%"),
    minWidth: wp("2.8472222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666657%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_28_1065: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1066: {
    width: wp("10.416666666666668%"),
    minWidth: wp("10.416666666666668%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.041666666666668%"),
    top: hp("27.459016393442624%")
  },
  View_28_1067: {
    width: wp("10.416666666666668%"),
    minWidth: wp("10.416666666666668%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_28_1068: {
    width: wp("3.8194444444444446%"),
    minWidth: wp("3.8194444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.652777777777779%"),
    top: hp("2.459016393442621%"),
    justifyContent: "flex-start"
  },
  Text_28_1068: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1069: {
    width: wp("2.7777777777777777%"),
    height: hp("2.732240697725223%"),
    top: hp("2.04918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_28_1070: {
    width: wp("1.8055555555555554%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.875%"),
    justifyContent: "center"
  },
  Text_28_1070: {
    color: "rgba(170, 170, 189, 1)",
    fontSize: 7,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1071: {
    width: wp("12.430555555555555%"),
    minWidth: wp("12.430555555555555%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.43055555555556%"),
    top: hp("97.6775956284153%")
  },
  View_28_1072: {
    width: wp("12.430555555555555%"),
    minWidth: wp("12.430555555555555%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_28_1073: {
    width: wp("5.694444444444445%"),
    minWidth: wp("5.694444444444445%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4027777777777715%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_28_1073: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1074: {
    width: wp("10.416666666666668%"),
    minWidth: wp("10.416666666666668%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.041666666666668%"),
    top: hp("37.02185792349727%")
  },
  View_28_1075: {
    width: wp("10.416666666666668%"),
    minWidth: wp("10.416666666666668%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_28_1076: {
    width: wp("3.680555555555556%"),
    minWidth: wp("3.680555555555556%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.652777777777779%"),
    top: hp("2.4590163934426172%"),
    justifyContent: "flex-start"
  },
  Text_28_1076: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1077: {
    width: wp("2.7777777777777777%"),
    height: hp("2.732240697725223%"),
    top: hp("2.0491803278688465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_28_1078: {
    width: wp("1.8055555555555554%"),
    top: hp("2.5956284153005384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.875%"),
    justifyContent: "center"
  },
  Text_28_1078: {
    color: "rgba(170, 170, 189, 1)",
    fontSize: 7,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1079: {
    width: wp("13.055555555555557%"),
    minWidth: wp("13.055555555555557%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.041666666666668%"),
    top: hp("46.58469945355191%")
  },
  View_28_1080: {
    width: wp("13.055555555555557%"),
    minWidth: wp("13.055555555555557%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_28_1081: {
    width: wp("2.7777777777777777%"),
    height: hp("2.732240697725223%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333357%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_28_1082: {
    width: wp("1.8055555555555554%"),
    top: hp("2.5956284153005456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444429%"),
    justifyContent: "center"
  },
  Text_28_1082: {
    color: "rgba(170, 170, 189, 1)",
    fontSize: 7,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1083: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.347222222222221%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_28_1083: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1084: {
    width: wp("0.6250056955549452%"),
    minWidth: wp("0.6250056955549452%"),
    height: hp("127.04918032786885%"),
    minHeight: hp("127.04918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.76388888888889%"),
    top: hp("20.76502732240437%")
  },
  View_28_1085: {
    width: wp("0.6250056955549452%"),
    minWidth: wp("0.6250056955549452%"),
    height: hp("127.04918032786885%"),
    minHeight: hp("127.04918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_28_1086: {
    width: wp("0.625%"),
    minWidth: wp("0.625%"),
    height: hp("127.04918032786885%"),
    minHeight: hp("127.04918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_1087: {
    width: wp("0.3472222222222222%"),
    minWidth: wp("0.3472222222222222%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13888888888888928%"),
    top: hp("66.66666666666666%")
  },
  ImageBackground_28_1088: {
    width: wp("0.3472222222222222%"),
    minWidth: wp("0.3472222222222222%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_1092: {
    width: wp("17.29217529296875%"),
    minWidth: wp("17.29217529296875%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("20.76502732240437%")
  },
  View_28_1093: {
    width: wp("17.29217529296875%"),
    height: hp("126.77595628415301%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_28_1094: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0005086263020834814%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_28_1095: {
    width: wp("17.291666666666668%"),
    height: hp("49.72677595628415%"),
    top: hp("77.04918032786884%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_28_1096: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.9488985655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.932040744357638%")
  },
  ImageBackground_28_1097: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222219%")
  },
  View_28_1098: {
    width: wp("6.805555555555555%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777772%"),
    justifyContent: "center"
  },
  Text_28_1098: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1099: {
    width: wp("17.291675143771702%"),
    height: hp("6.830606304231238%"),
    top: hp("6.967213114754095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0005001491970486605%")
  },
  View_28_1100: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.000008477105035264998%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_28_1101: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000008477105034820909%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_28_1102: {
    width: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    top: hp("3.1420765027322446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833324856228296%")
  },
  ImageBackground_28_1103: {
    width: wp("1.1111111111111112%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9022861056857634%")
  },
  View_28_1104: {
    width: wp("3.4722222222222223%"),
    top: hp("2.1857923497267784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772776285807286%"),
    justifyContent: "center"
  },
  Text_28_1104: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1105: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    height: hp("15.300555828490545%"),
    minHeight: hp("15.300555828490545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.207650273224047%")
  },
  View_28_1106: {
    width: wp("17.291666666666668%"),
    height: hp("15.300548532621457%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_28_1107: {
    width: wp("15%"),
    top: hp("7.923497267759558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888888%"),
    justifyContent: "center"
  },
  Text_28_1107: {
    color: "rgba(170, 170, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1108: {
    width: wp("6.25%"),
    top: hp("3.2786885245901587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3893636067708335%"),
    justifyContent: "center"
  },
  Text_28_1108: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1109: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    height: hp("15.300557913024567%"),
    minHeight: hp("15.300557913024567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.91803278688524%")
  },
  View_28_1110: {
    width: wp("17.291666666666668%"),
    height: hp("15.300548532621457%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_28_1111: {
    width: wp("15%"),
    top: hp("7.923497267759572%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888888%"),
    justifyContent: "center"
  },
  Text_28_1111: {
    color: "rgba(170, 170, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1112: {
    width: wp("10%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3893636067708335%"),
    justifyContent: "center"
  },
  Text_28_1112: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1113: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    height: hp("15.300548532621457%"),
    minHeight: hp("15.300548532621457%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45.62841530054644%")
  },
  View_28_1114: {
    width: wp("17.291666666666668%"),
    height: hp("15.300548532621457%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_28_1115: {
    width: wp("15%"),
    top: hp("7.923497267759572%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888888%"),
    justifyContent: "center"
  },
  Text_28_1115: {
    color: "rgba(170, 170, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1116: {
    width: wp("8.819444444444445%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3893636067708335%"),
    justifyContent: "center"
  },
  Text_28_1116: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1117: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    height: hp("15.300548532621457%"),
    minHeight: hp("15.300548532621457%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("61.338797814207645%")
  },
  View_28_1118: {
    width: wp("17.291666666666668%"),
    height: hp("15.300548532621457%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_28_1119: {
    width: wp("15%"),
    top: hp("7.923497267759558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888888%"),
    justifyContent: "center"
  },
  Text_28_1119: {
    color: "rgba(170, 170, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1120: {
    width: wp("5.208333333333334%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3893636067708335%"),
    justifyContent: "center"
  },
  Text_28_1120: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1121: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("3.8251384359891296%"),
    minHeight: hp("3.8251384359891296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.625%"),
    top: hp("9.153005464480875%")
  },
  View_28_1122: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("3.8251384359891296%"),
    minHeight: hp("3.8251384359891296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_1123: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("3.8251371331553643%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 246, 250, 1)",
    borderColor: "rgba(204, 211, 225, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_28_1124: {
    width: wp("7.430555555555555%"),
    minWidth: wp("7.430555555555555%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_28_1124: {
    color: "rgba(132, 133, 154, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_28_1125: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("3.8251384359891296%"),
    minHeight: hp("3.8251384359891296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.25%"),
    top: hp("9.153005464480875%")
  },
  View_28_1126: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("3.8251384359891296%"),
    minHeight: hp("3.8251384359891296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_1127: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("3.8251371331553643%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(170, 167, 176, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_28_1128: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.736111111111114%"),
    top: hp("0%"),
    backgroundColor: "rgba(114, 124, 245, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_28_1129: {
    width: wp("6.736111111111111%"),
    minWidth: wp("6.736111111111111%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_28_1129: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_28_1130: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("3.8251384359891296%"),
    minHeight: hp("3.8251384359891296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.875%"),
    top: hp("9.153005464480875%")
  },
  View_28_1131: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("3.8251384359891296%"),
    minHeight: hp("3.8251384359891296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_1132: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("3.8251371331553643%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(114, 124, 245, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_28_1133: {
    width: wp("7.430555555555555%"),
    minWidth: wp("7.430555555555555%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_28_1133: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_28_1134: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("3.8251384359891296%"),
    minHeight: hp("3.8251384359891296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.5%"),
    top: hp("9.153005464480875%")
  },
  View_28_1135: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("3.8251384359891296%"),
    minHeight: hp("3.8251384359891296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_1136: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("3.8251371331553643%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(114, 124, 245, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_28_1137: {
    width: wp("7.430555555555555%"),
    minWidth: wp("7.430555555555555%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_28_1137: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_28_1138: {
    width: wp("35.138888888888886%"),
    minWidth: wp("35.138888888888886%"),
    height: hp("5.737708044833824%"),
    minHeight: hp("5.737708044833824%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("9.426229508196721%")
  },
  View_28_1139: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("5.464482437717458%"),
    minHeight: hp("5.464482437717458%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.63888888888889%"),
    top: hp("0%")
  },
  View_28_1140: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("5.464481916583953%"),
    minHeight: hp("5.464481916583953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_28_1141: {
    width: wp("7.430555555555555%"),
    minWidth: wp("7.430555555555555%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_28_1141: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1142: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("5.737706481433306%"),
    minHeight: hp("5.737706481433306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.458333333333336%"),
    top: hp("0%")
  },
  View_28_1143: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("5.737705960299799%"),
    minHeight: hp("5.737705960299799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_28_1144: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("0.2732246951327298%"),
    minHeight: hp("0.2732246951327298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)"
  },
  View_28_1145: {
    width: wp("7.430555555555555%"),
    minWidth: wp("7.430555555555555%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6249999999999964%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_28_1145: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1146: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("5.464482437717458%"),
    minHeight: hp("5.464482437717458%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_1147: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("5.464481916583953%"),
    minHeight: hp("5.464481916583953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_28_1148: {
    width: wp("7.430555555555555%"),
    minWidth: wp("7.430555555555555%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6249999999999996%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_28_1148: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1149: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("5.464481916583953%"),
    minHeight: hp("5.464481916583953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.819444444444443%"),
    top: hp("0%")
  },
  View_28_1150: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("5.464481916583953%"),
    minHeight: hp("5.464481916583953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_28_1151: {
    width: wp("6.388888888888888%"),
    minWidth: wp("6.388888888888888%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1805555555555571%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_28_1151: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1152: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    height: hp("140.7103825136612%"),
    minHeight: hp("140.7103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.06944444444444445%"),
    top: hp("6.830601092896176%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I28_1152_5_71: {
    flexGrow: 1,
    width: wp("2.638888888888889%"),
    height: hp("140.7103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)"
  },
  View_28_1153: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.830618811435387%"),
    minHeight: hp("6.830618811435387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I28_1153_5_73: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.830618811435387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(30, 8, 68, 1)"
  },
  View_I28_1153_5_74: {
    flexGrow: 1,
    width: wp("2.6016635364956326%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.70518663194444%"),
    top: hp("0.9562841530054645%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I28_1153_5_75: {
    flexGrow: 1,
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.17979600694444%"),
    top: hp("1.639344262295082%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I28_1153_5_76: {
    flexGrow: 1,
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.99998304578993%"),
    top: hp("1.639344262295082%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I28_1153_5_77: {
    flexGrow: 1,
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.158842298719618%"),
    top: hp("1.639344262295082%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I28_1153_5_78: {
    flexGrow: 1,
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9790293375651041%"),
    top: hp("1.639344262295082%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I28_1153_5_79: {
    flexGrow: 1,
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.51845974392361%"),
    top: hp("1.639344262295082%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I28_1153_5_80: {
    flexGrow: 1,
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.338655259874131%"),
    top: hp("1.639344262295082%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I28_1153_5_81: {
    flexGrow: 1,
    width: wp("6.2873538335164385%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.875%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I28_1153_5_81: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_28_1154: {
    width: wp("0.06944444444444445%"),
    minWidth: wp("0.06944444444444445%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.91666666666667%"),
    top: hp("9.153005464480875%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_28_1155: {
    width: wp("0.6944445106718276%"),
    minWidth: wp("0.6944445106718276%"),
    height: hp("1.3661203488626115%"),
    minHeight: hp("1.3661203488626115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.61111111111111%"),
    top: hp("10.382513661202186%")
  },
  ImageBackground_28_1156: {
    width: wp("5.972222222222222%"),
    minWidth: wp("5.972222222222222%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.68055555555556%"),
    top: hp("49.18032786885246%")
  },
  View_28_1159: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.65277777777778%"),
    top: hp("46.31147540983606%")
  },
  View_28_1160: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_1161: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_1162: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 119, 229, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_28_1163: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_28_1164: {
    width: wp("0.5555555555555556%"),
    minWidth: wp("0.5555555555555556%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.375%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "center"
  },
  Text_28_1164: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_28_1165: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.347222222222221%"),
    top: hp("3.1420765027322446%")
  },
  View_28_1166: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.333333333333336%"),
    top: hp("46.31147540983606%")
  },
  View_28_1167: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_1168: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_1169: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 119, 229, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_28_1170: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_28_1171: {
    width: wp("0.5555555555555556%"),
    minWidth: wp("0.5555555555555556%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.375%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "center"
  },
  Text_28_1171: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_28_1172: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.347222222222214%"),
    top: hp("3.1420765027322446%")
  },
  View_28_1176: {
    width: wp("7.361111111111112%"),
    minWidth: wp("7.361111111111112%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.166666666666664%"),
    top: hp("65.7103825136612%")
  },
  View_28_1177: {
    width: wp("7.361111111111112%"),
    minWidth: wp("7.361111111111112%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_1178: {
    width: wp("7.361111111111112%"),
    minWidth: wp("7.361111111111112%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_1179: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4166666666666714%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 119, 229, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_28_1180: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.41530054644808%")
  },
  ImageBackground_28_1181: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4722222222222214%"),
    top: hp("0%")
  },
  ImageBackground_28_1182: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666643%")
  },
  View_28_1183: {
    width: wp("1.597222222222222%"),
    minWidth: wp("1.597222222222222%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.750000000000007%"),
    top: hp("3.278688524590166%"),
    justifyContent: "center"
  },
  Text_28_1183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_28_1184: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.763888888888893%"),
    top: hp("3.961748633879779%")
  },
  View_28_1185: {
    width: wp("9.027777777777777%"),
    minWidth: wp("9.027777777777777%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.19444444444444%"),
    top: hp("56.69398907103825%")
  },
  View_28_1186: {
    width: wp("9.027777777777777%"),
    minWidth: wp("9.027777777777777%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_1187: {
    width: wp("9.027777777777777%"),
    minWidth: wp("9.027777777777777%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_1188: {
    width: wp("9.027777777777777%"),
    minWidth: wp("9.027777777777777%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 138, 0, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_28_1189: {
    width: wp("1.1111111111111112%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_28_1190: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4722222222222285%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "center"
  },
  Text_28_1190: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_28_1191: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222214%"),
    top: hp("3.1420765027322375%")
  },
  View_28_1192: {
    width: wp("14.583333333333334%"),
    minWidth: wp("14.583333333333334%"),
    height: hp("31.967213114754102%"),
    minHeight: hp("31.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.263888888888886%"),
    top: hp("69.94535519125684%")
  },
  View_28_1193: {
    width: wp("9.027777777777777%"),
    minWidth: wp("9.027777777777777%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.431693989071036%")
  },
  View_28_1194: {
    width: wp("9.027777777777777%"),
    minWidth: wp("9.027777777777777%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_1195: {
    width: wp("9.027777777777777%"),
    minWidth: wp("9.027777777777777%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 138, 0, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_28_1196: {
    width: wp("1.1111111111111112%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_28_1197: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4722222222222285%"),
    top: hp("14.89071038251366%"),
    justifyContent: "center"
  },
  Text_28_1197: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_28_1198: {
    width: wp("5.173611111111111%"),
    minWidth: wp("5.173611111111111%"),
    height: hp("15.23224043715847%"),
    minHeight: hp("15.23224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.993055555555557%"),
    top: hp("15.91530054644808%")
  },
  ImageBackground_28_1199: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.75%"),
    top: hp("30.327868852459005%")
  },
  ImageBackground_28_1200: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.541666666666671%"),
    top: hp("15.027322404371589%")
  },
  ImageBackground_28_1201: {
    width: wp("6.493055555555556%"),
    minWidth: wp("6.493055555555556%"),
    height: hp("12.636612021857923%"),
    minHeight: hp("12.636612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.513888888888893%"),
    top: hp("0%")
  },
  ImageBackground_28_1202: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0972222222222285%"),
    top: hp("11.61202185792348%")
  },
  ImageBackground_28_1203: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.2222222222222285%"),
    top: hp("15.573770491803273%")
  },
  View_28_1204: {
    width: wp("8.402777777777779%"),
    minWidth: wp("8.402777777777779%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.19444444444444%"),
    top: hp("34.42622950819672%")
  },
  View_28_1205: {
    width: wp("8.402777777777779%"),
    minWidth: wp("8.402777777777779%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_1206: {
    width: wp("8.402777777777779%"),
    minWidth: wp("8.402777777777779%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_1207: {
    width: wp("8.402777777777779%"),
    minWidth: wp("8.402777777777779%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 138, 0, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_28_1208: {
    width: wp("1.1111111111111112%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_28_1209: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4027777777777857%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "center"
  },
  Text_28_1209: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_28_1210: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.944444444444443%"),
    top: hp("3.1420765027322375%")
  },
  ImageBackground_28_1211: {
    width: wp("8.75%"),
    minWidth: wp("8.75%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.86111111111111%"),
    top: hp("37.15846994535519%")
  },
  ImageBackground_28_1215: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.18055555555556%"),
    top: hp("37.02185792349727%")
  },
  ImageBackground_28_1219: {
    width: wp("6.80555608537462%"),
    minWidth: wp("6.80555608537462%"),
    height: hp("17.213115796365372%"),
    minHeight: hp("17.213115796365372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.29166666666666%"),
    top: hp("40.30054644808743%")
  },
  ImageBackground_28_1223: {
    width: wp("7.569444444444444%"),
    minWidth: wp("7.569444444444444%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.18055555555555%"),
    top: hp("48.90710382513661%")
  },
  ImageBackground_28_1227: {
    width: wp("0.8333336644702488%"),
    minWidth: wp("0.8333336644702488%"),
    height: hp("14.89071038251366%"),
    minHeight: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.638888888888886%"),
    top: hp("52.459016393442624%")
  },
  ImageBackground_28_1231: {
    width: wp("9.166666666666666%"),
    minWidth: wp("9.166666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.90277777777778%"),
    top: hp("39.61748633879781%")
  },
  ImageBackground_28_1235: {
    width: wp("26.319444444444446%"),
    minWidth: wp("26.319444444444446%"),
    height: hp("23.90710382513661%"),
    minHeight: hp("23.90710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.90277777777778%"),
    top: hp("30.05464480874317%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
