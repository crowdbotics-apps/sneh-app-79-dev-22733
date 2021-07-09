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
      <View style={styles.View_59_3712} />
      <View style={styles.View_59_3719}>
        <Text style={styles.Text_59_3719}>secondary nav</Text>
      </View>
      <View style={styles.View_59_3720} />
      <View style={styles.View_59_3721}>
        <View style={styles.View_59_3722}>
          <View style={styles.View_59_3723}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3292/0d89/1f9fa84df59bd9de0ca83419f634c292"
              }}
              style={styles.ImageBackground_59_3724}
            />
            <View style={styles.View_59_3725}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8e3/a650/5c586e9ce839dc2623ee27d433aad132"
                }}
                style={styles.ImageBackground_59_3726}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea3/115f/bd7efe815fceeeb8e26cc53554552b0b"
                }}
                style={styles.ImageBackground_59_3727}
              />
            </View>
            <View style={styles.View_59_3728}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea3/115f/bd7efe815fceeeb8e26cc53554552b0b"
                }}
                style={styles.ImageBackground_59_3729}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cd5/5d65/13a41a7408223ef692ddf55ab2276a90"
                }}
                style={styles.ImageBackground_59_3730}
              />
            </View>
            <View style={styles.View_59_3731}>
              <View style={styles.View_59_3732}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65d0/435a/a0a2465cc4f5d29b73fc0efffd3203fb"
                  }}
                  style={styles.ImageBackground_59_3733}
                />
                <View style={styles.View_59_3734}>
                  <Text style={styles.Text_59_3734}>
                    Iphone 11 Pro Max 414 px 896 px
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06e5/e82c/fa1df0e483f28bc7640260f791b0debf"
                }}
                style={styles.ImageBackground_59_3735}
              />
            </View>
            <View style={styles.View_59_3736}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f2a/0d00/cf7445148d923a6c658105e1f7feb5ab"
                }}
                style={styles.ImageBackground_59_3737}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f2a/0d00/cf7445148d923a6c658105e1f7feb5ab"
                }}
                style={styles.ImageBackground_59_3738}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bae9/73cd/ad6584a7ec9a51d671c3568db27f98cf"
                }}
                style={styles.ImageBackground_59_3739}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bae9/73cd/ad6584a7ec9a51d671c3568db27f98cf"
                }}
                style={styles.ImageBackground_59_3740}
              />
              <View style={styles.View_59_3741} />
              <View style={styles.View_59_3742} />
              <View style={styles.View_59_3743} />
              <View style={styles.View_59_3744} />
            </View>
            <View style={styles.View_59_3745}>
              <View style={styles.View_59_3746} />
              <View style={styles.View_59_3747} />
              <View style={styles.View_59_3748}>
                <Text style={styles.Text_59_3748}>Zoom 100%</Text>
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
        style={styles.ImageBackground_59_3749}
      />
      <View style={styles.View_59_3750}>
        <View style={styles.View_59_3751} />
        <View style={styles.View_59_3752} />
        <View style={styles.View_59_3753}>
          <Text style={styles.Text_59_3753}>Sign Up</Text>
        </View>
      </View>
      <View style={styles.View_59_3754}>
        <View style={styles.View_59_3755} />
        <View style={styles.View_59_3756}>
          <Text style={styles.Text_59_3756}>Username</Text>
        </View>
        <View style={styles.View_59_3757} />
        <View style={styles.View_59_3758}>
          <Text style={styles.Text_59_3758}>abc</Text>
        </View>
      </View>
      <View style={styles.View_59_3759}>
        <View style={styles.View_59_3760} />
        <View style={styles.View_59_3761}>
          <Text style={styles.Text_59_3761}>Password</Text>
        </View>
        <View style={styles.View_59_3762} />
        <View style={styles.View_59_3763}>
          <Text style={styles.Text_59_3763}>***</Text>
        </View>
      </View>
      <View style={styles.View_59_3764}>
        <View style={styles.View_59_3765} />
        <View style={styles.View_59_3766} />
        <View style={styles.View_59_3767}>
          <Text style={styles.Text_59_3767}>***</Text>
        </View>
        <View style={styles.View_59_3768}>
          <Text style={styles.Text_59_3768}>Validate Password</Text>
        </View>
      </View>
      <View style={styles.View_59_3769}>
        <View style={styles.View_59_3770}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7a0/5ed6/6f2a7ebdd170ca737868dcc29bfdb00f"
            }}
            style={styles.ImageBackground_59_3771}
          />
          <View style={styles.View_59_3772}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cc6/24b9/8139ca9e37f930d0ec3fa677e8beca39"
              }}
              style={styles.ImageBackground_59_3773}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_59_3777}>
        <View style={styles.View_59_3778}>
          <View style={styles.View_59_3779} />
          <View style={styles.View_59_3780}>
            <View style={styles.View_59_3781} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
              }}
              style={styles.ImageBackground_59_3782}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f34a/2c2b/c7e7f301dd64736fc18906603e2e36df"
              }}
              style={styles.ImageBackground_59_3783}
            />
            <View style={styles.View_59_3784}>
              <Text style={styles.Text_59_3784}>Logic elements</Text>
            </View>
          </View>
          <View style={styles.View_59_3785}>
            <View style={styles.View_59_3786} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
              }}
              style={styles.ImageBackground_59_3787}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a47f/dce3/6934bf4bc5b860e49114ea02a57ba322"
              }}
              style={styles.ImageBackground_59_3788}
            />
            <View style={styles.View_59_3789}>
              <Text style={styles.Text_59_3789}>Triggers</Text>
            </View>
          </View>
          <View style={styles.View_59_3790}>
            <View style={styles.View_59_3791} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
              }}
              style={styles.ImageBackground_59_3792}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e15/9f3b/18be2dac5ae6daa0758574b8392c16e0"
              }}
              style={styles.ImageBackground_59_3793}
            />
            <View style={styles.View_59_3794}>
              <Text style={styles.Text_59_3794}>Data</Text>
            </View>
          </View>
          <View style={styles.View_59_3795}>
            <View style={styles.View_59_3796} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3eb2/f74c/b5a662fcef5eef3cf60f6e7500d4d4af"
              }}
              style={styles.ImageBackground_59_3797}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
              }}
              style={styles.ImageBackground_59_3798}
            />
            <View style={styles.View_59_3799}>
              <Text style={styles.Text_59_3799}>Transforms</Text>
            </View>
          </View>
          <View style={styles.View_59_3800}>
            <View style={styles.View_59_3801} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
              }}
              style={styles.ImageBackground_59_3802}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c84/01de/a011b5e329f5ac82e119eed4c7e286aa"
              }}
              style={styles.ImageBackground_59_3803}
            />
            <View style={styles.View_59_3804}>
              <Text style={styles.Text_59_3804}>3rd Party API</Text>
            </View>
          </View>
          <View style={styles.View_59_3805}>
            <View style={styles.View_59_3806} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
              }}
              style={styles.ImageBackground_59_3807}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b0c/5661/cfd08146c10c6902a35fa9e6e231467a"
              }}
              style={styles.ImageBackground_59_3808}
            />
            <View style={styles.View_59_3809}>
              <Text style={styles.Text_59_3809}>Messages</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_59_3810}>
          <View style={styles.View_59_3811} />
          <View style={styles.View_59_3812} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4017/21d4/92811b55dfc3399a398feab0d0f822d7"
            }}
            style={styles.ImageBackground_59_3813}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05b2/5ae6/38da62105a984cb8d31dcdddaa5f7443"
            }}
            style={styles.ImageBackground_59_3814}
          />
          <View style={styles.View_59_3815}>
            <Text style={styles.Text_59_3815}>Actions</Text>
          </View>
        </View>
        <View style={styles.View_59_3816}>
          <View style={styles.View_59_3817}>
            <View style={styles.View_59_3818} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/740b/dc05/d3e2195f94a4a534df1f8dd35fb747aa"
              }}
              style={styles.ImageBackground_59_3819}
            />
            <View style={styles.View_59_3820}>
              <Text style={styles.Text_59_3820}>Element Property</Text>
            </View>
          </View>
          <View style={styles.View_59_3821}>
            <View style={styles.View_59_3822} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/740b/dc05/d3e2195f94a4a534df1f8dd35fb747aa"
              }}
              style={styles.ImageBackground_59_3823}
            />
            <View style={styles.View_59_3824}>
              <Text style={styles.Text_59_3824}>Call endpoint</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_59_3825}>
          <View style={styles.View_59_3826}>
            <View style={styles.View_59_3827} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/740b/dc05/d3e2195f94a4a534df1f8dd35fb747aa"
              }}
              style={styles.ImageBackground_59_3828}
            />
            <View style={styles.View_59_3829}>
              <Text style={styles.Text_59_3829}>Send Email</Text>
            </View>
          </View>
          <View style={styles.View_59_3830}>
            <View style={styles.View_59_3831} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/740b/dc05/d3e2195f94a4a534df1f8dd35fb747aa"
              }}
              style={styles.ImageBackground_59_3832}
            />
            <View style={styles.View_59_3833}>
              <Text style={styles.Text_59_3833}>Navigate</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_59_3834}>
        <View style={styles.View_59_3835}>
          <View style={styles.View_59_3836} />
          <View style={styles.View_59_3837}>
            <Text style={styles.Text_59_3837}>Cancel</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_3838}>
        <View style={styles.View_59_3839}>
          <View style={styles.View_59_3840} />
          <View style={styles.View_59_3841} />
          <View style={styles.View_59_3842}>
            <Text style={styles.Text_59_3842}>save</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_3843}>
        <View style={styles.View_59_3844}>
          <View style={styles.View_59_3845} />
          <View style={styles.View_59_3846}>
            <Text style={styles.Text_59_3846}>properties</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_3847}>
        <View style={styles.View_59_3848}>
          <View style={styles.View_59_3849} />
          <View style={styles.View_59_3850}>
            <Text style={styles.Text_59_3850}>figma import</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_3851}>
        <View style={styles.View_59_3852}>
          <View style={styles.View_59_3853} />
          <View style={styles.View_59_3854}>
            <Text style={styles.Text_59_3854}>Connectors</Text>
          </View>
        </View>
        <View style={styles.View_59_3855}>
          <View style={styles.View_59_3856} />
          <View style={styles.View_59_3857} />
          <View style={styles.View_59_3858}>
            <Text style={styles.Text_59_3858}>Functions</Text>
          </View>
        </View>
        <View style={styles.View_59_3859}>
          <View style={styles.View_59_3860} />
          <View style={styles.View_59_3861}>
            <Text style={styles.Text_59_3861}>Design</Text>
          </View>
        </View>
        <View style={styles.View_59_3862}>
          <View style={styles.View_59_3863} />
          <View style={styles.View_59_3864}>
            <Text style={styles.Text_59_3864}>Editor</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_3865}>
        <View style={styles.View_I59_3865_5_71} />
      </View>
      <View style={styles.View_59_3866}>
        <View style={styles.View_I59_3866_5_73} />
        <View style={styles.View_I59_3866_5_74} />
        <View style={styles.View_I59_3866_5_75} />
        <View style={styles.View_I59_3866_5_76} />
        <View style={styles.View_I59_3866_5_77} />
        <View style={styles.View_I59_3866_5_78} />
        <View style={styles.View_I59_3866_5_79} />
        <View style={styles.View_I59_3866_5_80} />
        <View style={styles.View_I59_3866_5_81}>
          <Text style={styles.Text_I59_3866_5_81}>main nav</Text>
        </View>
      </View>
      <View style={styles.View_59_3867} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3486/062b/f30ae9bfa8cfb4121baa42087fe0505e"
        }}
        style={styles.ImageBackground_59_3868}
      />
      <View style={styles.View_59_3869}>
        <View style={styles.View_59_3870}>
          <View style={styles.View_59_3871}>
            <View style={styles.View_59_3872} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f34a/2c2b/c7e7f301dd64736fc18906603e2e36df"
              }}
              style={styles.ImageBackground_59_3873}
            />
          </View>
        </View>
        <View style={styles.View_59_3874}>
          <View style={styles.View_59_3875} />
          <View style={styles.View_59_3876}>
            <Text style={styles.Text_59_3876}>if</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_3877}>
        <View style={styles.View_59_3878}>
          <View style={styles.View_59_3879}>
            <View style={styles.View_59_3880} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f34a/2c2b/c7e7f301dd64736fc18906603e2e36df"
              }}
              style={styles.ImageBackground_59_3881}
            />
          </View>
        </View>
        <View style={styles.View_59_3882}>
          <View style={styles.View_59_3883} />
          <View style={styles.View_59_3884}>
            <Text style={styles.Text_59_3884}>if</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd50/5e5d/3228310ee9f69151c7a5137efda1fe87"
        }}
        style={styles.ImageBackground_59_3885}
      />
      <View style={styles.View_59_3889}>
        <View style={styles.View_59_3890}>
          <View style={styles.View_59_3891}>
            <View style={styles.View_59_3892} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e15/9f3b/18be2dac5ae6daa0758574b8392c16e0"
              }}
              style={styles.ImageBackground_59_3893}
            />
          </View>
        </View>
        <View style={styles.View_59_3894}>
          <View style={styles.View_59_3895} />
          <View style={styles.View_59_3896}>
            <Text style={styles.Text_59_3896}>Value is equal</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_3897}>
        <View style={styles.View_59_3898}>
          <View style={styles.View_59_3899}>
            <View style={styles.View_59_3900} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e15/9f3b/18be2dac5ae6daa0758574b8392c16e0"
              }}
              style={styles.ImageBackground_59_3901}
            />
          </View>
        </View>
        <View style={styles.View_59_3902}>
          <View style={styles.View_59_3903} />
          <View style={styles.View_59_3904}>
            <Text style={styles.Text_59_3904}>Value is not null</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_3905}>
        <View style={styles.View_59_3906}>
          <View style={styles.View_59_3907}>
            <View style={styles.View_59_3908} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1a0/7934/b2eb3b36ef98a8e216922c9b67220d80"
              }}
              style={styles.ImageBackground_59_3909}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1a0/7934/b2eb3b36ef98a8e216922c9b67220d80"
              }}
              style={styles.ImageBackground_59_3910}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/ce61/076a5fe63e6abc65488e3a62d872c9ae"
              }}
              style={styles.ImageBackground_59_3911}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3eb2/f74c/b5a662fcef5eef3cf60f6e7500d4d4af"
              }}
              style={styles.ImageBackground_59_3912}
            />
          </View>
        </View>
        <View style={styles.View_59_3913}>
          <View style={styles.View_59_3914} />
          <View style={styles.View_59_3915}>
            <Text style={styles.Text_59_3915}>Set status</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_3916}>
        <View style={styles.View_59_3917}>
          <View style={styles.View_59_3918}>
            <View style={styles.View_59_3919} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f34a/2c2b/c7e7f301dd64736fc18906603e2e36df"
              }}
              style={styles.ImageBackground_59_3920}
            />
          </View>
        </View>
        <View style={styles.View_59_3921}>
          <View style={styles.View_59_3922} />
          <View style={styles.View_59_3923}>
            <Text style={styles.Text_59_3923}>Else</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_3924}>
        <View style={styles.View_59_3925}>
          <View style={styles.View_59_3926}>
            <View style={styles.View_59_3927} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/ce61/076a5fe63e6abc65488e3a62d872c9ae"
              }}
              style={styles.ImageBackground_59_3928}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b0c/5661/cfd08146c10c6902a35fa9e6e231467a"
              }}
              style={styles.ImageBackground_59_3929}
            />
            <View style={styles.View_59_3930}>
              <View style={styles.View_59_3931} />
              <View style={styles.View_59_3932}>
                <Text style={styles.Text_59_3932}>Show message</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0aca/4e63/ddb967b396569560372c64a58331a77b"
        }}
        style={styles.ImageBackground_59_3933}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3f3/f725/ef90e46c603e8a2e1e66e5432feda58a"
        }}
        style={styles.ImageBackground_59_3936}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6866/e9c5/9857db31991bbb5e4519c05567f40259"
        }}
        style={styles.ImageBackground_59_3940}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c868/3bc2/b56bce27cfdab07e7a2fcbce187730aa"
        }}
        style={styles.ImageBackground_59_3943}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19cc/9224/237aa758ea305a509fe8b64265b33593"
        }}
        style={styles.ImageBackground_59_3947}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd6d/083b/13a6fffbb3bd6bd22d499b6fe51d792a"
        }}
        style={styles.ImageBackground_59_3951}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0226/2083/9421b282e7a58925d25ef3971edc6765"
        }}
        style={styles.ImageBackground_59_3955}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc31/7322/98cc7b8ce04d74e047693a1de8084531"
        }}
        style={styles.ImageBackground_59_3959}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eac/3f0f/ad55409a25dca714ed51f46091f9a394"
        }}
        style={styles.ImageBackground_59_3963}
      />
      <View style={styles.View_59_3967}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6301/332e/15c86012fd7745a059b8e7658171c561"
          }}
          style={styles.ImageBackground_59_3968}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66ca/da53/7d7fdbf39e2f4d625d55fa650e44f58d"
          }}
          style={styles.ImageBackground_59_3969}
        />
      </View>
      <View style={styles.View_59_3970}>
        <View style={styles.View_59_3971} />
        <View style={styles.View_59_3972}>
          <View style={styles.View_59_3973}>
            <Text style={styles.Text_59_3973}>Active</Text>
          </View>
          <View style={styles.View_59_3974}>
            <Text style={styles.Text_59_3974}>Inactive</Text>
          </View>
          <View style={styles.View_59_3975} />
          <View style={styles.View_59_3976} />
        </View>
        <View style={styles.View_59_3977}>
          <Text style={styles.Text_59_3977}>Set status</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("147.54098360655738%") },
  View_59_3712: {
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
  View_59_3719: {
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
  Text_59_3719: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_59_3720: {
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
  View_59_3721: {
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
  View_59_3722: {
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
  View_59_3723: {
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
  ImageBackground_59_3724: {
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
  View_59_3725: {
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
  ImageBackground_59_3726: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_59_3727: {
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
  View_59_3728: {
    width: wp("1.990052064259847%"),
    minWidth: wp("1.990052064259847%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.54557291666667%"),
    top: hp("1.775956284153004%")
  },
  ImageBackground_59_3729: {
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
  ImageBackground_59_3730: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_3731: {
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
  View_59_3732: {
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
  ImageBackground_59_3733: {
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
  View_59_3734: {
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
  Text_59_3734: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_3735: {
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
  View_59_3736: {
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
  ImageBackground_59_3737: {
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
  ImageBackground_59_3738: {
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
  ImageBackground_59_3739: {
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
  ImageBackground_59_3740: {
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
  View_59_3741: {
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
  View_59_3742: {
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
  View_59_3743: {
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
  View_59_3744: {
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
  View_59_3745: {
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
  View_59_3746: {
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
  View_59_3747: {
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
  View_59_3748: {
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
  Text_59_3748: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_3749: {
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
  View_59_3750: {
    width: wp("8.472222222222223%"),
    minWidth: wp("8.472222222222223%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.06944444444444%"),
    top: hp("108.60655737704919%")
  },
  View_59_3751: {
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
  View_59_3752: {
    width: wp("2.083333333333333%"),
    height: hp("2.185792349726776%"),
    top: hp("2.322404371584682%"),
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
  View_59_3753: {
    width: wp("2.8472222222222223%"),
    minWidth: wp("2.8472222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666671%"),
    top: hp("2.45901639344261%"),
    justifyContent: "flex-start"
  },
  Text_59_3753: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3754: {
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
  View_59_3755: {
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
  View_59_3756: {
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
  Text_59_3756: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3757: {
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
  View_59_3758: {
    width: wp("1.8055555555555554%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.875%"),
    justifyContent: "center"
  },
  Text_59_3758: {
    color: "rgba(170, 170, 189, 1)",
    fontSize: 7,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3759: {
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
  View_59_3760: {
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
  View_59_3761: {
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
  Text_59_3761: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3762: {
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
  View_59_3763: {
    width: wp("1.8055555555555554%"),
    top: hp("2.5956284153005384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.875%"),
    justifyContent: "center"
  },
  Text_59_3763: {
    color: "rgba(170, 170, 189, 1)",
    fontSize: 7,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3764: {
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
  View_59_3765: {
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
  View_59_3766: {
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
  View_59_3767: {
    width: wp("1.8055555555555554%"),
    top: hp("2.5956284153005456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444429%"),
    justifyContent: "center"
  },
  Text_59_3767: {
    color: "rgba(170, 170, 189, 1)",
    fontSize: 7,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3768: {
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
  Text_59_3768: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3769: {
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
  View_59_3770: {
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
  ImageBackground_59_3771: {
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
  View_59_3772: {
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
  ImageBackground_59_3773: {
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
  View_59_3777: {
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
  View_59_3778: {
    width: wp("17.292177412245007%"),
    height: hp("126.77595628415301%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_3779: {
    width: wp("17.291666666666668%"),
    height: hp("49.59016393442623%"),
    top: hp("77.18579234972677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_59_3780: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    height: hp("6.830604219697212%"),
    minHeight: hp("6.830604219697212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0005425347222218768%"),
    top: hp("0%")
  },
  View_59_3781: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_59_3782: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.9488985655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055555%")
  },
  ImageBackground_59_3783: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9716796875%")
  },
  View_59_3784: {
    width: wp("6.805555555555555%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772352430555554%"),
    justifyContent: "center"
  },
  Text_59_3784: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3785: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    height: hp("6.830604219697212%"),
    minHeight: hp("6.830604219697212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0005425347222218768%"),
    top: hp("42.349726775956285%")
  },
  View_59_3786: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_59_3787: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.9488985655737636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055555%")
  },
  ImageBackground_59_3788: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590163934426172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9716796875%")
  },
  View_59_3789: {
    width: wp("3.680555555555556%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772352430555554%"),
    justifyContent: "center"
  },
  Text_59_3789: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3790: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    height: hp("6.830604219697212%"),
    minHeight: hp("6.830604219697212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0005425347222218768%"),
    top: hp("49.31693989071038%")
  },
  View_59_3791: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_59_3792: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.9488985655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055555%")
  },
  ImageBackground_59_3793: {
    width: wp("0.9722222222222222%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9716796875%")
  },
  View_59_3794: {
    width: wp("2.1527777777777777%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772352430555554%"),
    justifyContent: "center"
  },
  Text_59_3794: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3795: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    height: hp("6.830604219697212%"),
    minHeight: hp("6.830604219697212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0005425347222218768%"),
    top: hp("56.28415300546448%")
  },
  View_59_3796: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_59_3797: {
    width: wp("1.1111111111111112%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.3224043715847102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9022352430555562%")
  },
  ImageBackground_59_3798: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.948931918118163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055555%")
  },
  View_59_3799: {
    width: wp("5.277777777777778%"),
    top: hp("2.185825702271174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772352430555554%"),
    justifyContent: "center"
  },
  Text_59_3799: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3800: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    height: hp("6.830604219697212%"),
    minHeight: hp("6.830604219697212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0005425347222218768%"),
    top: hp("63.251366120218584%")
  },
  View_59_3801: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_59_3802: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.9488985655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055555%")
  },
  ImageBackground_59_3803: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9716796875%")
  },
  View_59_3804: {
    width: wp("5.902777777777778%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772352430555554%"),
    justifyContent: "center"
  },
  Text_59_3804: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3805: {
    width: wp("17.291666666666668%"),
    minWidth: wp("17.291666666666668%"),
    height: hp("6.830604219697212%"),
    minHeight: hp("6.830604219697212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0005425347222218768%"),
    top: hp("70.21857923497268%")
  },
  View_59_3806: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_59_3807: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.9488985655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055555%")
  },
  ImageBackground_59_3808: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9022352430555562%")
  },
  View_59_3809: {
    width: wp("4.444444444444445%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772352430555554%"),
    justifyContent: "center"
  },
  Text_59_3809: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3810: {
    width: wp("17.291675143771702%"),
    height: hp("6.830606304231238%"),
    top: hp("6.967213114754095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0005425347222218768%")
  },
  View_59_3811: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_59_3812: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_59_3813: {
    width: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    top: hp("3.1420765027322446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333334%")
  },
  ImageBackground_59_3814: {
    width: wp("1.1111111111111112%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.902303059895833%")
  },
  View_59_3815: {
    width: wp("3.4722222222222223%"),
    top: hp("2.1857923497267784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772352430555554%"),
    justifyContent: "center"
  },
  Text_59_3815: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3816: {
    width: wp("17.291670905219185%"),
    height: hp("13.661203228059362%"),
    top: hp("14.207650273224047%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_3817: {
    width: wp("8.541667196485731%"),
    height: hp("13.661203228059362%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.75%")
  },
  View_59_3818: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_59_3819: {
    width: wp("0.7638888888888888%"),
    height: hp("1.5027322404371584%"),
    top: hp("1.3661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.083333333333334%")
  },
  View_59_3820: {
    width: wp("3.680555555555556%"),
    top: hp("4.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4305555555555554%"),
    justifyContent: "center"
  },
  Text_59_3820: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3821: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_3822: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_59_3823: {
    width: wp("0.7638888888888888%"),
    height: hp("1.5027322404371584%"),
    top: hp("1.3661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.083333333333334%")
  },
  View_59_3824: {
    width: wp("3.8194444444444446%"),
    top: hp("4.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.430555555555556%"),
    justifyContent: "center"
  },
  Text_59_3824: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3825: {
    width: wp("17.291670905219185%"),
    height: hp("13.661202185792352%"),
    top: hp("28.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_3826: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.75%")
  },
  View_59_3827: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_59_3828: {
    width: wp("0.7638888888888888%"),
    height: hp("1.5027322404371584%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.083333333333334%")
  },
  View_59_3829: {
    width: wp("2.361111111111111%"),
    top: hp("4.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1249999999999982%"),
    justifyContent: "center"
  },
  Text_59_3829: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3830: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_3831: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_59_3832: {
    width: wp("0.7638888888888888%"),
    height: hp("1.5027322404371584%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.083333333333334%")
  },
  View_59_3833: {
    width: wp("3.75%"),
    top: hp("5.601092896174869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.430555555555556%"),
    justifyContent: "center"
  },
  Text_59_3833: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3834: {
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
  View_59_3835: {
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
  View_59_3836: {
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
  View_59_3837: {
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
  Text_59_3837: {
    color: "rgba(132, 133, 154, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_59_3838: {
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
  View_59_3839: {
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
  View_59_3840: {
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
  View_59_3841: {
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
  View_59_3842: {
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
  Text_59_3842: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_59_3843: {
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
  View_59_3844: {
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
  View_59_3845: {
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
  View_59_3846: {
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
  Text_59_3846: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_59_3847: {
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
  View_59_3848: {
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
  View_59_3849: {
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
  View_59_3850: {
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
  Text_59_3850: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_59_3851: {
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
  View_59_3852: {
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
  View_59_3853: {
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
  View_59_3854: {
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
  Text_59_3854: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3855: {
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
  View_59_3856: {
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
  View_59_3857: {
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
  View_59_3858: {
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
  Text_59_3858: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3859: {
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
  View_59_3860: {
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
  View_59_3861: {
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
  Text_59_3861: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3862: {
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
  View_59_3863: {
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
  View_59_3864: {
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
  Text_59_3864: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3865: {
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
  View_I59_3865_5_71: {
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
  View_59_3866: {
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
  View_I59_3866_5_73: {
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
  View_I59_3866_5_74: {
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
  View_I59_3866_5_75: {
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
  View_I59_3866_5_76: {
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
  View_I59_3866_5_77: {
    flexGrow: 1,
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.158799913194445%"),
    top: hp("1.639344262295082%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I59_3866_5_78: {
    flexGrow: 1,
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.97900390625%"),
    top: hp("1.639344262295082%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I59_3866_5_79: {
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
  View_I59_3866_5_80: {
    flexGrow: 1,
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.338595920138889%"),
    top: hp("1.639344262295082%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I59_3866_5_81: {
    flexGrow: 1,
    width: wp("6.2873538335164385%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.875%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I59_3866_5_81: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_59_3867: {
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
  ImageBackground_59_3868: {
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
  View_59_3869: {
    width: wp("7.222222222222221%"),
    minWidth: wp("7.222222222222221%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.06944444444444%"),
    top: hp("46.994535519125684%")
  },
  View_59_3870: {
    width: wp("7.222222222222221%"),
    minWidth: wp("7.222222222222221%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_3871: {
    width: wp("7.222222222222221%"),
    minWidth: wp("7.222222222222221%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_3872: {
    width: wp("7.222222222222221%"),
    minWidth: wp("7.222222222222221%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 220, 231, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_59_3873: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("1.775956284153004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_59_3874: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("0.9562841530054627%")
  },
  View_59_3875: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(214, 220, 231, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_59_3876: {
    width: wp("0.5555555555555556%"),
    minWidth: wp("0.5555555555555556%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333286%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_59_3876: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3877: {
    width: wp("7.222222222222221%"),
    minWidth: wp("7.222222222222221%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.541666666666664%"),
    top: hp("65.84699453551912%")
  },
  View_59_3878: {
    width: wp("7.222222222222221%"),
    minWidth: wp("7.222222222222221%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_3879: {
    width: wp("7.222222222222221%"),
    minWidth: wp("7.222222222222221%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_3880: {
    width: wp("7.222222222222221%"),
    minWidth: wp("7.222222222222221%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 220, 231, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_59_3881: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("1.7759562841530112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.250000000000007%")
  },
  View_59_3882: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.05555555555555%"),
    top: hp("0.9562841530054698%")
  },
  View_59_3883: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(214, 220, 231, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_59_3884: {
    width: wp("0.5555555555555556%"),
    minWidth: wp("0.5555555555555556%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333428%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_59_3884: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_3885: {
    width: wp("31.52777777777778%"),
    minWidth: wp("31.52777777777778%"),
    height: hp("36.885245901639344%"),
    minHeight: hp("36.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.041666666666664%"),
    top: hp("29.78142076502732%")
  },
  View_59_3889: {
    width: wp("10.347222222222221%"),
    minWidth: wp("10.347222222222221%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.01388888888889%"),
    top: hp("46.994535519125684%")
  },
  View_59_3890: {
    width: wp("10.347222222222221%"),
    minWidth: wp("10.347222222222221%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_3891: {
    width: wp("10.347222222222221%"),
    minWidth: wp("10.347222222222221%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_3892: {
    width: wp("10.347222222222221%"),
    minWidth: wp("10.347222222222221%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 220, 231, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_59_3893: {
    width: wp("0.9722222222222222%"),
    height: hp("2.3224043715846996%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.249999999999993%")
  },
  View_59_3894: {
    width: wp("6.597222222222222%"),
    minWidth: wp("6.597222222222222%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.05555555555555%"),
    top: hp("0.9562841530054627%")
  },
  View_59_3895: {
    width: wp("6.597222222222222%"),
    minWidth: wp("6.597222222222222%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(214, 220, 231, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_59_3896: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_59_3896: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3897: {
    width: wp("11.041666666666666%"),
    minWidth: wp("11.041666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.01388888888889%"),
    top: hp("80.46448087431693%")
  },
  View_59_3898: {
    width: wp("11.041666666666666%"),
    minWidth: wp("11.041666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_3899: {
    width: wp("11.041666666666666%"),
    minWidth: wp("11.041666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_3900: {
    width: wp("11.041666666666666%"),
    minWidth: wp("11.041666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 220, 231, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_59_3901: {
    width: wp("0.9722222222222222%"),
    height: hp("2.3224043715846996%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.249999999999993%")
  },
  View_59_3902: {
    width: wp("7.291666666666667%"),
    minWidth: wp("7.291666666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.05555555555555%"),
    top: hp("0.9562841530054698%")
  },
  View_59_3903: {
    width: wp("7.291666666666667%"),
    minWidth: wp("7.291666666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(214, 220, 231, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_59_3904: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_59_3904: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3905: {
    width: wp("10.902777777777779%"),
    minWidth: wp("10.902777777777779%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.84722222222223%"),
    top: hp("92.4863387978142%")
  },
  View_59_3906: {
    width: wp("10.902777777777779%"),
    minWidth: wp("10.902777777777779%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_3907: {
    width: wp("10.902777777777779%"),
    minWidth: wp("10.902777777777779%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_3908: {
    width: wp("10.48611111111111%"),
    minWidth: wp("10.48611111111111%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 220, 231, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_59_3909: {
    width: wp("0.8333333995607164%"),
    minWidth: wp("0.8333333995607164%"),
    height: hp("1.6393443925784585%"),
    minHeight: hp("1.6393443925784585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.791666666666657%"),
    top: hp("0%")
  },
  ImageBackground_59_3910: {
    width: wp("0.8333333995607164%"),
    minWidth: wp("0.8333333995607164%"),
    height: hp("1.6393443925784585%"),
    minHeight: hp("1.6393443925784585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.069444444444443%"),
    top: hp("2.868852459016395%")
  },
  ImageBackground_59_3911: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("3.415300546448094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.958333333333329%")
  },
  ImageBackground_59_3912: {
    width: wp("1.1111111111111112%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.4590163934426386%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2499999999999858%")
  },
  View_59_3913: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("1.7759562841530254%")
  },
  View_59_3914: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(214, 220, 231, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_59_3915: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888857%"),
    top: hp("0.8196721311475272%"),
    justifyContent: "center"
  },
  Text_59_3915: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3916: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.58333333333333%"),
    top: hp("34.2896174863388%")
  },
  View_59_3917: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_3918: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_3919: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 220, 231, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_59_3920: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("1.775956284153004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_59_3921: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9861111111111143%"),
    top: hp("0.9562841530054627%")
  },
  View_59_3922: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(214, 220, 231, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_59_3923: {
    width: wp("1.597222222222222%"),
    minWidth: wp("1.597222222222222%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222143%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_59_3923: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3924: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.36111111111111%"),
    top: hp("53.00546448087432%")
  },
  View_59_3925: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_3926: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_3927: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 220, 231, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_59_3928: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("2.5956284153005384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.972222222222214%")
  },
  ImageBackground_59_3929: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_59_3930: {
    width: wp("7.222222222222221%"),
    minWidth: wp("7.222222222222221%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555543%"),
    top: hp("0.9562841530054556%")
  },
  View_59_3931: {
    width: wp("7.222222222222221%"),
    minWidth: wp("7.222222222222221%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(214, 220, 231, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_59_3932: {
    width: wp("5.694444444444445%"),
    minWidth: wp("5.694444444444445%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333428%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_59_3932: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_3933: {
    width: wp("10.13888888888889%"),
    minWidth: wp("10.13888888888889%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("49.18032786885246%")
  },
  ImageBackground_59_3936: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.875%"),
    top: hp("48.90710382513661%")
  },
  ImageBackground_59_3940: {
    width: wp("0.8333336644702488%"),
    minWidth: wp("0.8333336644702488%"),
    height: hp("13.524590163934427%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.73611111111111%"),
    top: hp("51.775956284153004%")
  },
  ImageBackground_59_3943: {
    width: wp("12.986111111111112%"),
    minWidth: wp("12.986111111111112%"),
    height: hp("14.344266464150019%"),
    minHeight: hp("14.344266464150019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.01388888888889%"),
    top: hp("36.20218579234973%")
  },
  ImageBackground_59_3947: {
    width: wp("0.8333336644702488%"),
    minWidth: wp("0.8333336644702488%"),
    height: hp("14.89071038251366%"),
    minHeight: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.05555555555556%"),
    top: hp("38.9344262295082%")
  },
  ImageBackground_59_3951: {
    width: wp("0.8333343929714626%"),
    minWidth: wp("0.8333343929714626%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.73611111111111%"),
    top: hp("70.62841530054644%")
  },
  ImageBackground_59_3955: {
    width: wp("1.697506904602051%"),
    minWidth: wp("1.697506904602051%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.56636555989583%"),
    top: hp("85.24590163934425%")
  },
  ImageBackground_59_3959: {
    width: wp("14.51388888888889%"),
    minWidth: wp("14.51388888888889%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.041666666666664%"),
    top: hp("39.61748633879781%")
  },
  ImageBackground_59_3963: {
    width: wp("1.697506904602051%"),
    minWidth: wp("1.697506904602051%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.19444444444444%"),
    top: hp("97.81420765027322%")
  },
  View_59_3967: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.52777777777777%"),
    top: hp("96.03825136612022%")
  },
  ImageBackground_59_3968: {
    width: wp("1.0763888888888888%"),
    minWidth: wp("1.0763888888888888%"),
    height: hp("2.527322404371585%"),
    minHeight: hp("2.527322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444445708%"),
    top: hp("0.1366120218579141%")
  },
  ImageBackground_59_3969: {
    width: wp("1.1805555555555556%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_3970: {
    width: wp("13.055555555555557%"),
    minWidth: wp("13.055555555555557%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.27777777777779%"),
    top: hp("90.7103825136612%")
  },
  View_59_3971: {
    width: wp("13.055555555555557%"),
    minWidth: wp("13.055555555555557%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(214, 220, 231, 1)",
    borderColor: "rgba(206, 212, 218, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_59_3972: {
    width: wp("10.833333333333334%"),
    minWidth: wp("10.833333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888857%"),
    top: hp("6.420765027322403%")
  },
  View_59_3973: {
    width: wp("2.7083333333333335%"),
    minWidth: wp("2.7083333333333335%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "center"
  },
  Text_59_3973: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3974: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.291666666666657%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "center"
  },
  Text_59_3974: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_3975: {
    width: wp("2.569444444444444%"),
    minWidth: wp("2.569444444444444%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.541666666666657%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(206, 212, 218, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_59_3976: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.541666666666657%"),
    top: hp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_59_3977: {
    width: wp("4.652777777777778%"),
    top: hp("1.775956284152997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888857%"),
    justifyContent: "center"
  },
  Text_59_3977: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
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
