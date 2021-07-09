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
      <View style={styles.View_59_2853} />
      <View style={styles.View_59_2860}>
        <Text style={styles.Text_59_2860}>secondary nav</Text>
      </View>
      <View style={styles.View_59_2861} />
      <View style={styles.View_59_2862}>
        <View style={styles.View_59_2863}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93af/ce08/cbefa422c80a897dcf117d1ae1855b22"
            }}
            style={styles.ImageBackground_59_2864}
          />
          <View style={styles.View_59_2865}>
            <View style={styles.View_59_2866}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7a0/5ed6/6f2a7ebdd170ca737868dcc29bfdb00f"
                }}
                style={styles.ImageBackground_59_2867}
              />
              <View style={styles.View_59_2868}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cc6/24b9/8139ca9e37f930d0ec3fa677e8beca39"
                  }}
                  style={styles.ImageBackground_59_2869}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_59_2873}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3292/0d89/1f9fa84df59bd9de0ca83419f634c292"
              }}
              style={styles.ImageBackground_59_2874}
            />
            <View style={styles.View_59_2875}>
              <Text style={styles.Text_59_2875}>Page name</Text>
            </View>
            <View style={styles.View_59_2876}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8e3/a650/5c586e9ce839dc2623ee27d433aad132"
                }}
                style={styles.ImageBackground_59_2877}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea3/115f/bd7efe815fceeeb8e26cc53554552b0b"
                }}
                style={styles.ImageBackground_59_2878}
              />
            </View>
            <View style={styles.View_59_2879}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea3/115f/bd7efe815fceeeb8e26cc53554552b0b"
                }}
                style={styles.ImageBackground_59_2880}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cd5/5d65/13a41a7408223ef692ddf55ab2276a90"
                }}
                style={styles.ImageBackground_59_2881}
              />
            </View>
            <View style={styles.View_59_2882}>
              <View style={styles.View_59_2883}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65d0/435a/a0a2465cc4f5d29b73fc0efffd3203fb"
                  }}
                  style={styles.ImageBackground_59_2884}
                />
                <View style={styles.View_59_2885}>
                  <Text style={styles.Text_59_2885}>
                    Iphone 11 Pro Max 414 px 896 px
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06e5/e82c/fa1df0e483f28bc7640260f791b0debf"
                }}
                style={styles.ImageBackground_59_2886}
              />
            </View>
            <View style={styles.View_59_2887}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f2a/0d00/cf7445148d923a6c658105e1f7feb5ab"
                }}
                style={styles.ImageBackground_59_2888}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f2a/0d00/cf7445148d923a6c658105e1f7feb5ab"
                }}
                style={styles.ImageBackground_59_2889}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bae9/73cd/ad6584a7ec9a51d671c3568db27f98cf"
                }}
                style={styles.ImageBackground_59_2890}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bae9/73cd/ad6584a7ec9a51d671c3568db27f98cf"
                }}
                style={styles.ImageBackground_59_2891}
              />
              <View style={styles.View_59_2892} />
              <View style={styles.View_59_2893} />
              <View style={styles.View_59_2894} />
              <View style={styles.View_59_2895} />
            </View>
            <View style={styles.View_59_2896}>
              <View style={styles.View_59_2897} />
              <View style={styles.View_59_2898} />
              <View style={styles.View_59_2899}>
                <Text style={styles.Text_59_2899}>Zoom 100%</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_59_2900} />
        </View>
      </View>
      <View style={styles.View_59_2901}>
        <View style={styles.View_59_2902}>
          <View style={styles.View_59_2903} />
          <View style={styles.View_59_2904}>
            <Text style={styles.Text_59_2904}>Cancel</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_2905}>
        <View style={styles.View_59_2906}>
          <View style={styles.View_59_2907} />
          <View style={styles.View_59_2908} />
          <View style={styles.View_59_2909}>
            <Text style={styles.Text_59_2909}>save</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_2910}>
        <View style={styles.View_59_2911}>
          <View style={styles.View_59_2912} />
          <View style={styles.View_59_2913}>
            <Text style={styles.Text_59_2913}>properties</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_2914}>
        <View style={styles.View_59_2915}>
          <View style={styles.View_59_2916} />
          <View style={styles.View_59_2917}>
            <Text style={styles.Text_59_2917}>figma import</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_2918}>
        <View style={styles.View_59_2919}>
          <View style={styles.View_59_2920} />
          <View style={styles.View_59_2921}>
            <Text style={styles.Text_59_2921}>Connectors</Text>
          </View>
        </View>
        <View style={styles.View_59_2922}>
          <View style={styles.View_59_2923} />
          <View style={styles.View_59_2924} />
          <View style={styles.View_59_2925}>
            <Text style={styles.Text_59_2925}>Functions</Text>
          </View>
        </View>
        <View style={styles.View_59_2926}>
          <View style={styles.View_59_2927} />
          <View style={styles.View_59_2928}>
            <Text style={styles.Text_59_2928}>Design</Text>
          </View>
        </View>
        <View style={styles.View_59_2929}>
          <View style={styles.View_59_2930} />
          <View style={styles.View_59_2931}>
            <Text style={styles.Text_59_2931}>Editor</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_2932}>
        <View style={styles.View_I59_2932_5_71} />
      </View>
      <View style={styles.View_59_2933}>
        <View style={styles.View_I59_2933_5_73} />
        <View style={styles.View_I59_2933_5_74} />
        <View style={styles.View_I59_2933_5_75} />
        <View style={styles.View_I59_2933_5_76} />
        <View style={styles.View_I59_2933_5_77} />
        <View style={styles.View_I59_2933_5_78} />
        <View style={styles.View_I59_2933_5_79} />
        <View style={styles.View_I59_2933_5_80} />
        <View style={styles.View_I59_2933_5_81}>
          <Text style={styles.Text_I59_2933_5_81}>main nav</Text>
        </View>
      </View>
      <View style={styles.View_59_2934} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3486/062b/f30ae9bfa8cfb4121baa42087fe0505e"
        }}
        style={styles.ImageBackground_59_2935}
      />
      <View style={styles.View_59_2936}>
        <View style={styles.View_59_2937} />
        <View style={styles.View_59_2938} />
        <View style={styles.View_59_2939}>
          <Text style={styles.Text_59_2939}>Sign Up</Text>
        </View>
      </View>
      <View style={styles.View_59_2940}>
        <View style={styles.View_59_2941} />
        <View style={styles.View_59_2942}>
          <Text style={styles.Text_59_2942}>Username</Text>
        </View>
        <View style={styles.View_59_2943} />
        <View style={styles.View_59_2944}>
          <Text style={styles.Text_59_2944}>abc</Text>
        </View>
      </View>
      <View style={styles.View_59_2945}>
        <View style={styles.View_59_2946} />
        <View style={styles.View_59_2947}>
          <Text style={styles.Text_59_2947}>Password</Text>
        </View>
        <View style={styles.View_59_2948} />
        <View style={styles.View_59_2949}>
          <Text style={styles.Text_59_2949}>***</Text>
        </View>
      </View>
      <View style={styles.View_59_2950}>
        <View style={styles.View_59_2951} />
        <View style={styles.View_59_2952} />
        <View style={styles.View_59_2953}>
          <Text style={styles.Text_59_2953}>***</Text>
        </View>
        <View style={styles.View_59_2954}>
          <Text style={styles.Text_59_2954}>Validate Password</Text>
        </View>
      </View>
      <View style={styles.View_59_2955}>
        <View style={styles.View_59_2956}>
          <View style={styles.View_59_2957} />
          <View style={styles.View_59_2958}>
            <View style={styles.View_59_2959} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
              }}
              style={styles.ImageBackground_59_2960}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f34a/2c2b/c7e7f301dd64736fc18906603e2e36df"
              }}
              style={styles.ImageBackground_59_2961}
            />
            <View style={styles.View_59_2962}>
              <Text style={styles.Text_59_2962}>Logic elements</Text>
            </View>
          </View>
          <View style={styles.View_59_2963}>
            <View style={styles.View_59_2964} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
              }}
              style={styles.ImageBackground_59_2965}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb77/aaf1/6a892e155ebc05fdbaf11f53cb5f0b2a"
              }}
              style={styles.ImageBackground_59_2966}
            />
            <View style={styles.View_59_2967}>
              <Text style={styles.Text_59_2967}>Triggers</Text>
            </View>
          </View>
          <View style={styles.View_59_2968}>
            <View style={styles.View_59_2969} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
              }}
              style={styles.ImageBackground_59_2970}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e15/9f3b/18be2dac5ae6daa0758574b8392c16e0"
              }}
              style={styles.ImageBackground_59_2971}
            />
            <View style={styles.View_59_2972}>
              <Text style={styles.Text_59_2972}>Data</Text>
            </View>
          </View>
          <View style={styles.View_59_2973}>
            <View style={styles.View_59_2974} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3eb2/f74c/b5a662fcef5eef3cf60f6e7500d4d4af"
              }}
              style={styles.ImageBackground_59_2975}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
              }}
              style={styles.ImageBackground_59_2976}
            />
            <View style={styles.View_59_2977}>
              <Text style={styles.Text_59_2977}>Transforms</Text>
            </View>
          </View>
          <View style={styles.View_59_2978}>
            <View style={styles.View_59_2979} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
              }}
              style={styles.ImageBackground_59_2980}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c84/01de/a011b5e329f5ac82e119eed4c7e286aa"
              }}
              style={styles.ImageBackground_59_2981}
            />
            <View style={styles.View_59_2982}>
              <Text style={styles.Text_59_2982}>3rd Party API</Text>
            </View>
          </View>
          <View style={styles.View_59_2983}>
            <View style={styles.View_59_2984} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
              }}
              style={styles.ImageBackground_59_2985}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b0c/5661/cfd08146c10c6902a35fa9e6e231467a"
              }}
              style={styles.ImageBackground_59_2986}
            />
            <View style={styles.View_59_2987}>
              <Text style={styles.Text_59_2987}>Messages</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_59_2988}>
          <View style={styles.View_59_2989} />
          <View style={styles.View_59_2990} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4017/21d4/92811b55dfc3399a398feab0d0f822d7"
            }}
            style={styles.ImageBackground_59_2991}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05b2/5ae6/38da62105a984cb8d31dcdddaa5f7443"
            }}
            style={styles.ImageBackground_59_2992}
          />
          <View style={styles.View_59_2993}>
            <Text style={styles.Text_59_2993}>Actions</Text>
          </View>
        </View>
        <View style={styles.View_59_2994}>
          <View style={styles.View_59_2995}>
            <View style={styles.View_59_2996} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/740b/dc05/d3e2195f94a4a534df1f8dd35fb747aa"
              }}
              style={styles.ImageBackground_59_2997}
            />
            <View style={styles.View_59_2998}>
              <Text style={styles.Text_59_2998}>Element Property</Text>
            </View>
          </View>
          <View style={styles.View_59_2999}>
            <View style={styles.View_59_3000} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/740b/dc05/d3e2195f94a4a534df1f8dd35fb747aa"
              }}
              style={styles.ImageBackground_59_3001}
            />
            <View style={styles.View_59_3002}>
              <Text style={styles.Text_59_3002}>Call endpoint</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_59_3003}>
          <View style={styles.View_59_3004}>
            <View style={styles.View_59_3005} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/740b/dc05/d3e2195f94a4a534df1f8dd35fb747aa"
              }}
              style={styles.ImageBackground_59_3006}
            />
            <View style={styles.View_59_3007}>
              <Text style={styles.Text_59_3007}>Send Email</Text>
            </View>
          </View>
          <View style={styles.View_59_3008}>
            <View style={styles.View_59_3009} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/740b/dc05/d3e2195f94a4a534df1f8dd35fb747aa"
              }}
              style={styles.ImageBackground_59_3010}
            />
            <View style={styles.View_59_3011}>
              <Text style={styles.Text_59_3011}>Navigate</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("147.54098360655738%") },
  View_59_2853: {
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
  View_59_2860: {
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
  Text_59_2860: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_59_2861: {
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
  View_59_2862: {
    width: wp("96.66666666666667%"),
    minWidth: wp("96.66666666666667%"),
    height: hp("132.65027322404373%"),
    minHeight: hp("132.65027322404373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("15.163934426229508%")
  },
  View_59_2863: {
    width: wp("96.66666666666667%"),
    minWidth: wp("96.66666666666667%"),
    height: hp("132.65027322404373%"),
    minHeight: hp("132.65027322404373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_59_2864: {
    width: wp("78.47222222222221%"),
    minWidth: wp("78.47222222222221%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.194444444444446%"),
    top: hp("5.601092896174864%")
  },
  View_59_2865: {
    width: wp("0.6250056955549452%"),
    minWidth: wp("0.6250056955549452%"),
    height: hp("127.04918032786885%"),
    minHeight: hp("127.04918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.430555555555557%"),
    top: hp("5.601092896174864%")
  },
  View_59_2866: {
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
  ImageBackground_59_2867: {
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
  View_59_2868: {
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
  ImageBackground_59_2869: {
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
  View_59_2873: {
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
  ImageBackground_59_2874: {
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
  View_59_2875: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888888%"),
    top: hp("1.3661202185792352%"),
    justifyContent: "center"
  },
  Text_59_2875: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2876: {
    width: wp("1.990052064259847%"),
    minWidth: wp("1.990052064259847%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.16666666666667%"),
    top: hp("1.7759562841530059%")
  },
  ImageBackground_59_2877: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_59_2878: {
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
  View_59_2879: {
    width: wp("1.990052064259847%"),
    minWidth: wp("1.990052064259847%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.54557291666667%"),
    top: hp("1.7759562841530059%")
  },
  ImageBackground_59_2880: {
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
  ImageBackground_59_2881: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_2882: {
    width: wp("20.416666666666668%"),
    minWidth: wp("20.416666666666668%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.763888888888886%"),
    top: hp("1.6352752518784168%")
  },
  View_59_2883: {
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
  ImageBackground_59_2884: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.430555555555557%"),
    top: hp("0.5483158299180353%")
  },
  View_59_2885: {
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
  Text_59_2885: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_2886: {
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
  View_59_2887: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.59722222222223%"),
    top: hp("1.6393442622950811%")
  },
  ImageBackground_59_2888: {
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
  ImageBackground_59_2889: {
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
  ImageBackground_59_2890: {
    width: wp("0.0000012177165192244704%"),
    minWidth: wp("0.0000012177165192244704%"),
    height: hp("1.1001051449384844%"),
    minHeight: hp("1.1001051449384844%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9320068359375%"),
    top: hp("0.6111520235655767%")
  },
  ImageBackground_59_2891: {
    width: wp("0.0000012177165192244704%"),
    minWidth: wp("0.0000012177165192244704%"),
    height: hp("1.1001051449384844%"),
    minHeight: hp("1.1001051449384844%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18642849392360006%"),
    top: hp("0.6111520235655767%")
  },
  View_59_2892: {
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
  View_59_2893: {
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
  View_59_2894: {
    width: wp("0.43494151698218453%"),
    minWidth: wp("0.43494151698218453%"),
    height: hp("0.8556373132382585%"),
    minHeight: hp("0.8556373132382585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7456461588541572%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 220, 231, 1)",
    borderWidth: 1
  },
  View_59_2895: {
    width: wp("0.43494151698218453%"),
    minWidth: wp("0.43494151698218453%"),
    height: hp("0.8556373132382585%"),
    minHeight: hp("0.8556373132382585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7456461588541572%"),
    top: hp("1.4667781975751382%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 220, 231, 1)",
    borderWidth: 1
  },
  View_59_2896: {
    width: wp("14.652777777777779%"),
    minWidth: wp("14.652777777777779%"),
    height: hp("2.183538968445825%"),
    minHeight: hp("2.183538968445825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.625%"),
    top: hp("1.6393442622950811%")
  },
  View_59_2897: {
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
  View_59_2898: {
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
  View_59_2899: {
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
  Text_59_2899: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2900: {
    width: wp("17.77777777777778%"),
    minWidth: wp("17.77777777777778%"),
    height: hp("31.557377049180328%"),
    minHeight: hp("31.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.51388888888889%"),
    top: hp("35.10932297003074%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_2901: {
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
  View_59_2902: {
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
  View_59_2903: {
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
  View_59_2904: {
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
  Text_59_2904: {
    color: "rgba(132, 133, 154, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_59_2905: {
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
  View_59_2906: {
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
  View_59_2907: {
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
  View_59_2908: {
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
  View_59_2909: {
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
  Text_59_2909: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_59_2910: {
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
  View_59_2911: {
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
  View_59_2912: {
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
  View_59_2913: {
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
  Text_59_2913: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_59_2914: {
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
  View_59_2915: {
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
  View_59_2916: {
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
  View_59_2917: {
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
  Text_59_2917: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_59_2918: {
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
  View_59_2919: {
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
  View_59_2920: {
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
  View_59_2921: {
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
  Text_59_2921: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2922: {
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
  View_59_2923: {
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
  View_59_2924: {
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
  View_59_2925: {
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
  Text_59_2925: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2926: {
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
  View_59_2927: {
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
  View_59_2928: {
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
  Text_59_2928: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2929: {
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
  View_59_2930: {
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
  View_59_2931: {
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
  Text_59_2931: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2932: {
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
  View_I59_2932_5_71: {
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
  View_59_2933: {
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
  View_I59_2933_5_73: {
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
  View_I59_2933_5_74: {
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
  View_I59_2933_5_75: {
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
  View_I59_2933_5_76: {
    flexGrow: 1,
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("1.639344262295082%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I59_2933_5_77: {
    flexGrow: 1,
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.158833821614583%"),
    top: hp("1.639344262295082%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I59_2933_5_78: {
    flexGrow: 1,
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.979037814670139%"),
    top: hp("1.639344262295082%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I59_2933_5_79: {
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
  View_I59_2933_5_80: {
    flexGrow: 1,
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.338663736979166%"),
    top: hp("1.639344262295082%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I59_2933_5_81: {
    flexGrow: 1,
    width: wp("6.2873538335164385%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.875%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I59_2933_5_81: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_59_2934: {
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
  ImageBackground_59_2935: {
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
  View_59_2936: {
    width: wp("8.472222222222223%"),
    minWidth: wp("8.472222222222223%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.041666666666668%"),
    top: hp("56.14754098360656%")
  },
  View_59_2937: {
    width: wp("8.472222222222223%"),
    minWidth: wp("8.472222222222223%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(214, 220, 231, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_59_2938: {
    width: wp("2.083333333333333%"),
    height: hp("2.185792349726776%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888893%"),
    backgroundColor: "rgba(93, 94, 124, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_59_2939: {
    width: wp("2.8472222222222223%"),
    minWidth: wp("2.8472222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666664%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_59_2939: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2940: {
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
  View_59_2941: {
    width: wp("10.416666666666668%"),
    minWidth: wp("10.416666666666668%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(214, 220, 231, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_59_2942: {
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
  Text_59_2942: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2943: {
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
  View_59_2944: {
    width: wp("1.8055555555555554%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.875%"),
    justifyContent: "center"
  },
  Text_59_2944: {
    color: "rgba(170, 170, 189, 1)",
    fontSize: 7,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2945: {
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
  View_59_2946: {
    width: wp("10.416666666666668%"),
    minWidth: wp("10.416666666666668%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(214, 220, 231, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_59_2947: {
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
  Text_59_2947: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2948: {
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
  View_59_2949: {
    width: wp("1.8055555555555554%"),
    top: hp("2.5956284153005384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.875%"),
    justifyContent: "center"
  },
  Text_59_2949: {
    color: "rgba(170, 170, 189, 1)",
    fontSize: 7,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2950: {
    width: wp("14.374999999999998%"),
    minWidth: wp("14.374999999999998%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.041666666666668%"),
    top: hp("46.58469945355191%")
  },
  View_59_2951: {
    width: wp("14.374999999999998%"),
    minWidth: wp("14.374999999999998%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(214, 220, 231, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_59_2952: {
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
  View_59_2953: {
    width: wp("1.8055555555555554%"),
    top: hp("2.5956284153005456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444429%"),
    justifyContent: "center"
  },
  Text_59_2953: {
    color: "rgba(170, 170, 189, 1)",
    fontSize: 7,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2954: {
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
  Text_59_2954: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2955: {
    width: wp("17.292182710435654%"),
    minWidth: wp("17.292182710435654%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("20.76502732240437%")
  },
  View_59_2956: {
    width: wp("17.292177412245007%"),
    height: hp("126.77595628415301%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_2957: {
    width: wp("17.291666666666668%"),
    height: hp("49.59016393442623%"),
    top: hp("77.18579234972677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_59_2958: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    height: hp("6.830604219697212%"),
    minHeight: hp("6.830604219697212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0005086263020834814%"),
    top: hp("0%")
  },
  View_59_2959: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_59_2960: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.9488985655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055554%")
  },
  ImageBackground_59_2961: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9717135959201384%")
  },
  View_59_2962: {
    width: wp("6.805555555555555%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772691514756938%"),
    justifyContent: "center"
  },
  Text_59_2962: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2963: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    height: hp("6.830604219697212%"),
    minHeight: hp("6.830604219697212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0005086263020834814%"),
    top: hp("42.349726775956285%")
  },
  View_59_2964: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_59_2965: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.9488985655737636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055554%")
  },
  ImageBackground_59_2966: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590163934426172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9717135959201384%")
  },
  View_59_2967: {
    width: wp("3.680555555555556%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772691514756938%"),
    justifyContent: "center"
  },
  Text_59_2967: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2968: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    height: hp("6.830604219697212%"),
    minHeight: hp("6.830604219697212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0005086263020834814%"),
    top: hp("49.31693989071038%")
  },
  View_59_2969: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_59_2970: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.9488985655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055554%")
  },
  ImageBackground_59_2971: {
    width: wp("0.9722222222222222%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9717135959201384%")
  },
  View_59_2972: {
    width: wp("2.1527777777777777%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772691514756938%"),
    justifyContent: "center"
  },
  Text_59_2972: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2973: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    height: hp("6.830604219697212%"),
    minHeight: hp("6.830604219697212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0005086263020834814%"),
    top: hp("56.28415300546448%")
  },
  View_59_2974: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_59_2975: {
    width: wp("1.1111111111111112%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.3224043715847102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9022691514756946%")
  },
  ImageBackground_59_2976: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.948931918118163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055554%")
  },
  View_59_2977: {
    width: wp("5.277777777777778%"),
    top: hp("2.185825702271174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772691514756938%"),
    justifyContent: "center"
  },
  Text_59_2977: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2978: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    height: hp("6.830604219697212%"),
    minHeight: hp("6.830604219697212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0005086263020834814%"),
    top: hp("63.251366120218584%")
  },
  View_59_2979: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_59_2980: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.9488985655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055554%")
  },
  ImageBackground_59_2981: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9717135959201384%")
  },
  View_59_2982: {
    width: wp("5.902777777777778%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772691514756938%"),
    justifyContent: "center"
  },
  Text_59_2982: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2983: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    height: hp("6.830604219697212%"),
    minHeight: hp("6.830604219697212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0005086263020834814%"),
    top: hp("70.21857923497268%")
  },
  View_59_2984: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_59_2985: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.9488985655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055554%")
  },
  ImageBackground_59_2986: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9022691514756946%")
  },
  View_59_2987: {
    width: wp("4.444444444444445%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772691514756938%"),
    justifyContent: "center"
  },
  Text_59_2987: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2988: {
    width: wp("17.291675143771702%"),
    height: hp("6.830606304231238%"),
    top: hp("6.967213114754095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0005086263020834814%")
  },
  View_59_2989: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_59_2990: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_59_2991: {
    width: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    top: hp("3.1420765027322446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333332%")
  },
  ImageBackground_59_2992: {
    width: wp("1.1111111111111112%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9022691514756946%")
  },
  View_59_2993: {
    width: wp("3.4722222222222223%"),
    top: hp("2.1857923497267784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772691514756938%"),
    justifyContent: "center"
  },
  Text_59_2993: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2994: {
    width: wp("17.291670905219185%"),
    height: hp("13.661203228059362%"),
    top: hp("14.207650273224047%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_2995: {
    width: wp("8.541667196485731%"),
    height: hp("13.661203228059362%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.75%")
  },
  View_59_2996: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_59_2997: {
    width: wp("0.7638888888888888%"),
    height: hp("1.5027322404371584%"),
    top: hp("1.3661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.083333333333334%")
  },
  View_59_2998: {
    width: wp("3.680555555555556%"),
    top: hp("4.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4305555555555554%"),
    justifyContent: "center"
  },
  Text_59_2998: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_2999: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_3000: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_59_3001: {
    width: wp("0.7638888888888888%"),
    height: hp("1.5027322404371584%"),
    top: hp("1.3661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.083333333333334%")
  },
  View_59_3002: {
    width: wp("3.8194444444444446%"),
    top: hp("4.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.430555555555556%"),
    justifyContent: "center"
  },
  Text_59_3002: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3003: {
    width: wp("17.291670905219185%"),
    height: hp("13.661202185792352%"),
    top: hp("28.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_3004: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.75%")
  },
  View_59_3005: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_59_3006: {
    width: wp("0.7638888888888888%"),
    height: hp("1.5027322404371584%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.083333333333334%")
  },
  View_59_3007: {
    width: wp("2.361111111111111%"),
    top: hp("4.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1249999999999982%"),
    justifyContent: "center"
  },
  Text_59_3007: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3008: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_3009: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_59_3010: {
    width: wp("0.7638888888888888%"),
    height: hp("1.5027322404371584%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.083333333333334%")
  },
  View_59_3011: {
    width: wp("3.75%"),
    top: hp("5.601092896174869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.430555555555556%"),
    justifyContent: "center"
  },
  Text_59_3011: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
