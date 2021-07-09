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
      <View style={styles.View_59_4928} />
      <View style={styles.View_59_4935}>
        <Text style={styles.Text_59_4935}>secondary nav</Text>
      </View>
      <View style={styles.View_59_4936} />
      <View style={styles.View_59_4937}>
        <View style={styles.View_59_4938}>
          <View style={styles.View_59_4939}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3292/0d89/1f9fa84df59bd9de0ca83419f634c292"
              }}
              style={styles.ImageBackground_59_4940}
            />
            <View style={styles.View_59_4941}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8e3/a650/5c586e9ce839dc2623ee27d433aad132"
                }}
                style={styles.ImageBackground_59_4942}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea3/115f/bd7efe815fceeeb8e26cc53554552b0b"
                }}
                style={styles.ImageBackground_59_4943}
              />
            </View>
            <View style={styles.View_59_4944}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea3/115f/bd7efe815fceeeb8e26cc53554552b0b"
                }}
                style={styles.ImageBackground_59_4945}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cd5/5d65/13a41a7408223ef692ddf55ab2276a90"
                }}
                style={styles.ImageBackground_59_4946}
              />
            </View>
            <View style={styles.View_59_4947}>
              <View style={styles.View_59_4948}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65d0/435a/a0a2465cc4f5d29b73fc0efffd3203fb"
                  }}
                  style={styles.ImageBackground_59_4949}
                />
                <View style={styles.View_59_4950}>
                  <Text style={styles.Text_59_4950}>
                    Iphone 11 Pro Max 414 px 896 px
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06e5/e82c/fa1df0e483f28bc7640260f791b0debf"
                }}
                style={styles.ImageBackground_59_4951}
              />
            </View>
            <View style={styles.View_59_4952}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f2a/0d00/cf7445148d923a6c658105e1f7feb5ab"
                }}
                style={styles.ImageBackground_59_4953}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f2a/0d00/cf7445148d923a6c658105e1f7feb5ab"
                }}
                style={styles.ImageBackground_59_4954}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bae9/73cd/ad6584a7ec9a51d671c3568db27f98cf"
                }}
                style={styles.ImageBackground_59_4955}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bae9/73cd/ad6584a7ec9a51d671c3568db27f98cf"
                }}
                style={styles.ImageBackground_59_4956}
              />
              <View style={styles.View_59_4957} />
              <View style={styles.View_59_4958} />
              <View style={styles.View_59_4959} />
              <View style={styles.View_59_4960} />
            </View>
            <View style={styles.View_59_4961}>
              <View style={styles.View_59_4962} />
              <View style={styles.View_59_4963} />
              <View style={styles.View_59_4964}>
                <Text style={styles.Text_59_4964}>Zoom 100%</Text>
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
        style={styles.ImageBackground_59_4965}
      />
      <View style={styles.View_59_4966}>
        <View style={styles.View_59_4967} />
        <View style={styles.View_59_4968} />
        <View style={styles.View_59_4969}>
          <Text style={styles.Text_59_4969}>Sign Up</Text>
        </View>
      </View>
      <View style={styles.View_59_4970}>
        <View style={styles.View_59_4971} />
        <View style={styles.View_59_4972}>
          <Text style={styles.Text_59_4972}>Username</Text>
        </View>
        <View style={styles.View_59_4973} />
        <View style={styles.View_59_4974}>
          <Text style={styles.Text_59_4974}>abc</Text>
        </View>
      </View>
      <View style={styles.View_59_4975}>
        <View style={styles.View_59_4976} />
        <View style={styles.View_59_4977}>
          <Text style={styles.Text_59_4977}>Password</Text>
        </View>
        <View style={styles.View_59_4978} />
        <View style={styles.View_59_4979}>
          <Text style={styles.Text_59_4979}>***</Text>
        </View>
      </View>
      <View style={styles.View_59_4980}>
        <View style={styles.View_59_4981} />
        <View style={styles.View_59_4982} />
        <View style={styles.View_59_4983}>
          <Text style={styles.Text_59_4983}>***</Text>
        </View>
        <View style={styles.View_59_4984}>
          <Text style={styles.Text_59_4984}>Validate Password</Text>
        </View>
      </View>
      <View style={styles.View_59_4985}>
        <View style={styles.View_59_4986}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7a0/5ed6/6f2a7ebdd170ca737868dcc29bfdb00f"
            }}
            style={styles.ImageBackground_59_4987}
          />
          <View style={styles.View_59_4988}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cc6/24b9/8139ca9e37f930d0ec3fa677e8beca39"
              }}
              style={styles.ImageBackground_59_4989}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_59_4993}>
        <View style={styles.View_59_4994}>
          <View style={styles.View_59_4995} />
          <View style={styles.View_59_4996}>
            <View style={styles.View_59_4997} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
              }}
              style={styles.ImageBackground_59_4998}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f34a/2c2b/c7e7f301dd64736fc18906603e2e36df"
              }}
              style={styles.ImageBackground_59_4999}
            />
            <View style={styles.View_59_5000}>
              <Text style={styles.Text_59_5000}>Logic elements</Text>
            </View>
          </View>
          <View style={styles.View_59_5001}>
            <View style={styles.View_59_5002} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
              }}
              style={styles.ImageBackground_59_5003}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb77/aaf1/6a892e155ebc05fdbaf11f53cb5f0b2a"
              }}
              style={styles.ImageBackground_59_5004}
            />
            <View style={styles.View_59_5005}>
              <Text style={styles.Text_59_5005}>Triggers</Text>
            </View>
          </View>
          <View style={styles.View_59_5006}>
            <View style={styles.View_59_5007} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
              }}
              style={styles.ImageBackground_59_5008}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e15/9f3b/18be2dac5ae6daa0758574b8392c16e0"
              }}
              style={styles.ImageBackground_59_5009}
            />
            <View style={styles.View_59_5010}>
              <Text style={styles.Text_59_5010}>Data</Text>
            </View>
          </View>
          <View style={styles.View_59_5011}>
            <View style={styles.View_59_5012} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3eb2/f74c/b5a662fcef5eef3cf60f6e7500d4d4af"
              }}
              style={styles.ImageBackground_59_5013}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
              }}
              style={styles.ImageBackground_59_5014}
            />
            <View style={styles.View_59_5015}>
              <Text style={styles.Text_59_5015}>Transforms</Text>
            </View>
          </View>
          <View style={styles.View_59_5016}>
            <View style={styles.View_59_5017} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
              }}
              style={styles.ImageBackground_59_5018}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c84/01de/a011b5e329f5ac82e119eed4c7e286aa"
              }}
              style={styles.ImageBackground_59_5019}
            />
            <View style={styles.View_59_5020}>
              <Text style={styles.Text_59_5020}>3rd Party API</Text>
            </View>
          </View>
          <View style={styles.View_59_5021}>
            <View style={styles.View_59_5022} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
              }}
              style={styles.ImageBackground_59_5023}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b0c/5661/cfd08146c10c6902a35fa9e6e231467a"
              }}
              style={styles.ImageBackground_59_5024}
            />
            <View style={styles.View_59_5025}>
              <Text style={styles.Text_59_5025}>Messages</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_59_5026}>
          <View style={styles.View_59_5027} />
          <View style={styles.View_59_5028} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4017/21d4/92811b55dfc3399a398feab0d0f822d7"
            }}
            style={styles.ImageBackground_59_5029}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05b2/5ae6/38da62105a984cb8d31dcdddaa5f7443"
            }}
            style={styles.ImageBackground_59_5030}
          />
          <View style={styles.View_59_5031}>
            <Text style={styles.Text_59_5031}>Actions</Text>
          </View>
        </View>
        <View style={styles.View_59_5032}>
          <View style={styles.View_59_5033}>
            <View style={styles.View_59_5034} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/740b/dc05/d3e2195f94a4a534df1f8dd35fb747aa"
              }}
              style={styles.ImageBackground_59_5035}
            />
            <View style={styles.View_59_5036}>
              <Text style={styles.Text_59_5036}>Element Property</Text>
            </View>
          </View>
          <View style={styles.View_59_5037}>
            <View style={styles.View_59_5038} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/740b/dc05/d3e2195f94a4a534df1f8dd35fb747aa"
              }}
              style={styles.ImageBackground_59_5039}
            />
            <View style={styles.View_59_5040}>
              <Text style={styles.Text_59_5040}>Call endpoint</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_59_5041}>
          <View style={styles.View_59_5042}>
            <View style={styles.View_59_5043} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/740b/dc05/d3e2195f94a4a534df1f8dd35fb747aa"
              }}
              style={styles.ImageBackground_59_5044}
            />
            <View style={styles.View_59_5045}>
              <Text style={styles.Text_59_5045}>Send Email</Text>
            </View>
          </View>
          <View style={styles.View_59_5046}>
            <View style={styles.View_59_5047} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/740b/dc05/d3e2195f94a4a534df1f8dd35fb747aa"
              }}
              style={styles.ImageBackground_59_5048}
            />
            <View style={styles.View_59_5049}>
              <Text style={styles.Text_59_5049}>Navigate</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_59_5050}>
        <View style={styles.View_59_5051}>
          <View style={styles.View_59_5052} />
          <View style={styles.View_59_5053}>
            <Text style={styles.Text_59_5053}>Cancel</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_5054}>
        <View style={styles.View_59_5055}>
          <View style={styles.View_59_5056} />
          <View style={styles.View_59_5057} />
          <View style={styles.View_59_5058}>
            <Text style={styles.Text_59_5058}>save</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_5059}>
        <View style={styles.View_59_5060}>
          <View style={styles.View_59_5061} />
          <View style={styles.View_59_5062}>
            <Text style={styles.Text_59_5062}>properties</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_5063}>
        <View style={styles.View_59_5064}>
          <View style={styles.View_59_5065} />
          <View style={styles.View_59_5066}>
            <Text style={styles.Text_59_5066}>figma import</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_5067}>
        <View style={styles.View_59_5068}>
          <View style={styles.View_59_5069} />
          <View style={styles.View_59_5070}>
            <Text style={styles.Text_59_5070}>Connectors</Text>
          </View>
        </View>
        <View style={styles.View_59_5071}>
          <View style={styles.View_59_5072} />
          <View style={styles.View_59_5073} />
          <View style={styles.View_59_5074}>
            <Text style={styles.Text_59_5074}>Functions</Text>
          </View>
        </View>
        <View style={styles.View_59_5075}>
          <View style={styles.View_59_5076} />
          <View style={styles.View_59_5077}>
            <Text style={styles.Text_59_5077}>Design</Text>
          </View>
        </View>
        <View style={styles.View_59_5078}>
          <View style={styles.View_59_5079} />
          <View style={styles.View_59_5080}>
            <Text style={styles.Text_59_5080}>Editor</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_5081}>
        <View style={styles.View_I59_5081_5_71} />
      </View>
      <View style={styles.View_59_5082}>
        <View style={styles.View_I59_5082_5_73} />
        <View style={styles.View_I59_5082_5_74} />
        <View style={styles.View_I59_5082_5_75} />
        <View style={styles.View_I59_5082_5_76} />
        <View style={styles.View_I59_5082_5_77} />
        <View style={styles.View_I59_5082_5_78} />
        <View style={styles.View_I59_5082_5_79} />
        <View style={styles.View_I59_5082_5_80} />
        <View style={styles.View_I59_5082_5_81}>
          <Text style={styles.Text_I59_5082_5_81}>main nav</Text>
        </View>
      </View>
      <View style={styles.View_59_5083} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3486/062b/f30ae9bfa8cfb4121baa42087fe0505e"
        }}
        style={styles.ImageBackground_59_5084}
      />
      <View style={styles.View_59_5085}>
        <View style={styles.View_59_5086}>
          <View style={styles.View_59_5087}>
            <View style={styles.View_59_5088} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f34a/2c2b/c7e7f301dd64736fc18906603e2e36df"
              }}
              style={styles.ImageBackground_59_5089}
            />
          </View>
        </View>
        <View style={styles.View_59_5090}>
          <View style={styles.View_59_5091} />
          <View style={styles.View_59_5092}>
            <Text style={styles.Text_59_5092}>if</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_5093}>
        <View style={styles.View_59_5094}>
          <View style={styles.View_59_5095}>
            <View style={styles.View_59_5096} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f34a/2c2b/c7e7f301dd64736fc18906603e2e36df"
              }}
              style={styles.ImageBackground_59_5097}
            />
          </View>
        </View>
        <View style={styles.View_59_5098}>
          <View style={styles.View_59_5099} />
          <View style={styles.View_59_5100}>
            <Text style={styles.Text_59_5100}>if</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_5101}>
        <View style={styles.View_59_5102}>
          <View style={styles.View_59_5103}>
            <View style={styles.View_59_5104} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f34a/2c2b/c7e7f301dd64736fc18906603e2e36df"
              }}
              style={styles.ImageBackground_59_5105}
            />
          </View>
        </View>
        <View style={styles.View_59_5106}>
          <View style={styles.View_59_5107} />
          <View style={styles.View_59_5108}>
            <Text style={styles.Text_59_5108}>if</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_5109}>
        <View style={styles.View_59_5110}>
          <View style={styles.View_59_5111}>
            <View style={styles.View_59_5112} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f34a/2c2b/c7e7f301dd64736fc18906603e2e36df"
              }}
              style={styles.ImageBackground_59_5113}
            />
          </View>
        </View>
        <View style={styles.View_59_5114}>
          <View style={styles.View_59_5115} />
          <View style={styles.View_59_5116}>
            <Text style={styles.Text_59_5116}>Action successful</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_5117}>
        <View style={styles.View_59_5118}>
          <View style={styles.View_59_5119}>
            <View style={styles.View_59_5120} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b0c/5661/cfd08146c10c6902a35fa9e6e231467a"
              }}
              style={styles.ImageBackground_59_5121}
            />
          </View>
        </View>
        <View style={styles.View_59_5122}>
          <View style={styles.View_59_5123} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/ce61/076a5fe63e6abc65488e3a62d872c9ae"
            }}
            style={styles.ImageBackground_59_5124}
          />
          <View style={styles.View_59_5125}>
            <Text style={styles.Text_59_5125}>Send email</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8aad/3cb4/f5818acda2e9183e502895e4e682b503"
        }}
        style={styles.ImageBackground_59_5126}
      />
      <View style={styles.View_59_5130}>
        <View style={styles.View_59_5131}>
          <View style={styles.View_59_5132}>
            <View style={styles.View_59_5133} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e15/9f3b/18be2dac5ae6daa0758574b8392c16e0"
              }}
              style={styles.ImageBackground_59_5134}
            />
          </View>
        </View>
        <View style={styles.View_59_5135}>
          <View style={styles.View_59_5136} />
          <View style={styles.View_59_5137}>
            <Text style={styles.Text_59_5137}>Value is equal</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_5138}>
        <View style={styles.View_59_5139}>
          <View style={styles.View_59_5140}>
            <View style={styles.View_59_5141} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e15/9f3b/18be2dac5ae6daa0758574b8392c16e0"
              }}
              style={styles.ImageBackground_59_5142}
            />
          </View>
        </View>
        <View style={styles.View_59_5143}>
          <View style={styles.View_59_5144} />
          <View style={styles.View_59_5145}>
            <Text style={styles.Text_59_5145}>Value is not null</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_5146}>
        <View style={styles.View_59_5147}>
          <View style={styles.View_59_5148}>
            <View style={styles.View_59_5149} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb77/aaf1/6a892e155ebc05fdbaf11f53cb5f0b2a"
              }}
              style={styles.ImageBackground_59_5150}
            />
          </View>
        </View>
        <View style={styles.View_59_5151}>
          <View style={styles.View_59_5152} />
          <View style={styles.View_59_5153}>
            <Text style={styles.Text_59_5153}>Submit values</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_5154}>
        <View style={styles.View_59_5155}>
          <View style={styles.View_59_5156}>
            <View style={styles.View_59_5157} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/ce61/076a5fe63e6abc65488e3a62d872c9ae"
              }}
              style={styles.ImageBackground_59_5158}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b08/b75b/87ae025e145dd8df5d98197dd18465a4"
              }}
              style={styles.ImageBackground_59_5159}
            />
          </View>
        </View>
        <View style={styles.View_59_5160}>
          <View style={styles.View_59_5161} />
          <View style={styles.View_59_5162}>
            <Text style={styles.Text_59_5162}>Active</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_5163}>
        <View style={styles.View_59_5164}>
          <View style={styles.View_59_5165}>
            <View style={styles.View_59_5166} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f34a/2c2b/c7e7f301dd64736fc18906603e2e36df"
              }}
              style={styles.ImageBackground_59_5167}
            />
          </View>
        </View>
        <View style={styles.View_59_5168}>
          <View style={styles.View_59_5169} />
          <View style={styles.View_59_5170}>
            <Text style={styles.Text_59_5170}>Else</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_5171}>
        <View style={styles.View_59_5172}>
          <View style={styles.View_59_5173}>
            <View style={styles.View_59_5174} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/ce61/076a5fe63e6abc65488e3a62d872c9ae"
              }}
              style={styles.ImageBackground_59_5175}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b0c/5661/cfd08146c10c6902a35fa9e6e231467a"
              }}
              style={styles.ImageBackground_59_5176}
            />
            <View style={styles.View_59_5177}>
              <View style={styles.View_59_5178} />
              <View style={styles.View_59_5179}>
                <Text style={styles.Text_59_5179}>Show message</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_59_5180}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9e9/00fc/b1dec7be34e9aa1fda03e411ea0c47b0"
          }}
          style={styles.ImageBackground_59_5181}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4185/b7a9/29d83ffb505c0544e466bd39364156f8"
          }}
          style={styles.ImageBackground_59_5184}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2000/1050/0218ca79589f0494ed8d924150c37dae"
          }}
          style={styles.ImageBackground_59_5188}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/87c1/ddc7/f42cb82f38abc29d4a311e924e4cd1b0"
          }}
          style={styles.ImageBackground_59_5191}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd8f/baa6/1d43666ca035a9d7de7d0d8d2984bb08"
          }}
          style={styles.ImageBackground_59_5195}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbbb/dac2/be09854eec6c149bd7acd227a7d9bcfb"
          }}
          style={styles.ImageBackground_59_5199}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0226/2083/9421b282e7a58925d25ef3971edc6765"
          }}
          style={styles.ImageBackground_59_5203}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d015/5486/0dbe15d2d9ace3f86b74c7c4886b3fd8"
          }}
          style={styles.ImageBackground_59_5207}
        />
      </View>
      <View style={styles.View_59_5211}>
        <View style={styles.View_59_5212}>
          <View style={styles.View_59_5213}>
            <View style={styles.View_59_5214} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f34a/2c2b/c7e7f301dd64736fc18906603e2e36df"
              }}
              style={styles.ImageBackground_59_5215}
            />
          </View>
        </View>
        <View style={styles.View_59_5216}>
          <View style={styles.View_59_5217} />
          <View style={styles.View_59_5218}>
            <Text style={styles.Text_59_5218}>Else</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_5219}>
        <View style={styles.View_59_5220}>
          <View style={styles.View_59_5221}>
            <View style={styles.View_59_5222} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/ce61/076a5fe63e6abc65488e3a62d872c9ae"
              }}
              style={styles.ImageBackground_59_5223}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b0c/5661/cfd08146c10c6902a35fa9e6e231467a"
              }}
              style={styles.ImageBackground_59_5224}
            />
            <View style={styles.View_59_5225}>
              <View style={styles.View_59_5226} />
              <View style={styles.View_59_5227}>
                <Text style={styles.Text_59_5227}>Show message</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e457/c226/572b5f348da587d0d2b8c1707f8b7958"
        }}
        style={styles.ImageBackground_59_5228}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e97/4eaa/92087870882d1ca2242626a051f11dc8"
        }}
        style={styles.ImageBackground_59_5232}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e457/c226/572b5f348da587d0d2b8c1707f8b7958"
        }}
        style={styles.ImageBackground_59_5236}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eac/3f0f/ad55409a25dca714ed51f46091f9a394"
        }}
        style={styles.ImageBackground_59_5240}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8574/a6e7/7a7a97806b34010af29f3e179c991745"
        }}
        style={styles.ImageBackground_59_5244}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85b2/0736/e814ae8c9e29f198b3bcc15794290534"
        }}
        style={styles.ImageBackground_59_5248}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd8f/baa6/1d43666ca035a9d7de7d0d8d2984bb08"
        }}
        style={styles.ImageBackground_59_5252}
      />
      <View style={styles.View_59_5256}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6301/332e/15c86012fd7745a059b8e7658171c561"
          }}
          style={styles.ImageBackground_59_5257}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66ca/da53/7d7fdbf39e2f4d625d55fa650e44f58d"
          }}
          style={styles.ImageBackground_59_5258}
        />
      </View>
      <View style={styles.View_59_5259}>
        <View style={styles.View_59_5260} />
        <View style={styles.View_59_5261} />
        <View style={styles.View_59_5262}>
          <Text style={styles.Text_59_5262}>Show message</Text>
        </View>
        <View style={styles.View_59_5263}>
          <Text style={styles.Text_59_5263}>
            Congratulations, your account has been created, please verify your
            email using the link provided
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("147.54098360655738%") },
  View_59_4928: {
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
  View_59_4935: {
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
  Text_59_4935: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_59_4936: {
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
  View_59_4937: {
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
  View_59_4938: {
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
  View_59_4939: {
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
  ImageBackground_59_4940: {
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
  View_59_4941: {
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
  ImageBackground_59_4942: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_59_4943: {
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
  View_59_4944: {
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
  ImageBackground_59_4945: {
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
  ImageBackground_59_4946: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_4947: {
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
  View_59_4948: {
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
  ImageBackground_59_4949: {
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
  View_59_4950: {
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
  Text_59_4950: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_4951: {
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
  View_59_4952: {
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
  ImageBackground_59_4953: {
    width: wp("0.8077485693825616%"),
    minWidth: wp("0.8077485693825616%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.31073676215277146%"),
    top: hp("0.48891494834358085%")
  },
  ImageBackground_59_4954: {
    width: wp("0.8077485693825616%"),
    minWidth: wp("0.8077485693825616%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.31073676215277146%"),
    top: hp("1.9557264984631146%")
  },
  ImageBackground_59_4955: {
    width: wp("0.0000012177163929057617%"),
    minWidth: wp("0.0000012177163929057617%"),
    height: hp("1.1001051449384844%"),
    minHeight: hp("1.1001051449384844%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9320746527777857%"),
    top: hp("0.6111520235655767%")
  },
  ImageBackground_59_4956: {
    width: wp("0.0000012177163929057617%"),
    minWidth: wp("0.0000012177163929057617%"),
    height: hp("1.1001051449384844%"),
    minHeight: hp("1.1001051449384844%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1863606770833286%"),
    top: hp("0.6111520235655767%")
  },
  View_59_4957: {
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
  View_59_4958: {
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
  View_59_4959: {
    width: wp("0.43494151698218453%"),
    minWidth: wp("0.43494151698218453%"),
    height: hp("0.8556373132382585%"),
    minHeight: hp("0.8556373132382585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7455783420138857%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 220, 231, 1)",
    borderWidth: 1
  },
  View_59_4960: {
    width: wp("0.43494151698218453%"),
    minWidth: wp("0.43494151698218453%"),
    height: hp("0.8556373132382585%"),
    minHeight: hp("0.8556373132382585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7455783420138857%"),
    top: hp("1.4667781975751382%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(214, 220, 231, 1)",
    borderWidth: 1
  },
  View_59_4961: {
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
  View_59_4962: {
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
  View_59_4963: {
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
  View_59_4964: {
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
  Text_59_4964: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_4965: {
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
  View_59_4966: {
    width: wp("8.472222222222223%"),
    minWidth: wp("8.472222222222223%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.86111111111111%"),
    top: hp("106.28415300546447%")
  },
  View_59_4967: {
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
  View_59_4968: {
    width: wp("2.083333333333333%"),
    height: hp("2.185792349726776%"),
    top: hp("2.3224043715847102%"),
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
  View_59_4969: {
    width: wp("2.8472222222222223%"),
    minWidth: wp("2.8472222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666657%"),
    top: hp("2.4590163934426386%"),
    justifyContent: "flex-start"
  },
  Text_59_4969: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4970: {
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
  View_59_4971: {
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
  View_59_4972: {
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
  Text_59_4972: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4973: {
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
  View_59_4974: {
    width: wp("1.8055555555555554%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.875%"),
    justifyContent: "center"
  },
  Text_59_4974: {
    color: "rgba(170, 170, 189, 1)",
    fontSize: 7,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4975: {
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
  View_59_4976: {
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
  View_59_4977: {
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
  Text_59_4977: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4978: {
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
  View_59_4979: {
    width: wp("1.8055555555555554%"),
    top: hp("2.5956284153005384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.875%"),
    justifyContent: "center"
  },
  Text_59_4979: {
    color: "rgba(170, 170, 189, 1)",
    fontSize: 7,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4980: {
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
  View_59_4981: {
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
  View_59_4982: {
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
  View_59_4983: {
    width: wp("1.8055555555555554%"),
    top: hp("2.5956284153005456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444429%"),
    justifyContent: "center"
  },
  Text_59_4983: {
    color: "rgba(170, 170, 189, 1)",
    fontSize: 7,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4984: {
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
  Text_59_4984: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4985: {
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
  View_59_4986: {
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
  ImageBackground_59_4987: {
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
  View_59_4988: {
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
  ImageBackground_59_4989: {
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
  View_59_4993: {
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
  View_59_4994: {
    width: wp("17.292177412245007%"),
    height: hp("126.77595628415301%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_4995: {
    width: wp("17.291666666666668%"),
    height: hp("49.59016393442623%"),
    top: hp("77.18579234972677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_59_4996: {
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
  View_59_4997: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_59_4998: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.9488985655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055555%")
  },
  ImageBackground_59_4999: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9716796875%")
  },
  View_59_5000: {
    width: wp("6.805555555555555%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772352430555554%"),
    justifyContent: "center"
  },
  Text_59_5000: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5001: {
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
  View_59_5002: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_59_5003: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.9488985655737636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055555%")
  },
  ImageBackground_59_5004: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590163934426172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9716796875%")
  },
  View_59_5005: {
    width: wp("3.680555555555556%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772352430555554%"),
    justifyContent: "center"
  },
  Text_59_5005: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5006: {
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
  View_59_5007: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_59_5008: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.9488985655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055555%")
  },
  ImageBackground_59_5009: {
    width: wp("0.9722222222222222%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9716796875%")
  },
  View_59_5010: {
    width: wp("2.1527777777777777%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772352430555554%"),
    justifyContent: "center"
  },
  Text_59_5010: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5011: {
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
  View_59_5012: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_59_5013: {
    width: wp("1.1111111111111112%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.3224043715847102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9022352430555562%")
  },
  ImageBackground_59_5014: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.948931918118163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055555%")
  },
  View_59_5015: {
    width: wp("5.277777777777778%"),
    top: hp("2.185825702271174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772352430555554%"),
    justifyContent: "center"
  },
  Text_59_5015: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5016: {
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
  View_59_5017: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_59_5018: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.9488985655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055555%")
  },
  ImageBackground_59_5019: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9716796875%")
  },
  View_59_5020: {
    width: wp("5.902777777777778%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772352430555554%"),
    justifyContent: "center"
  },
  Text_59_5020: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5021: {
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
  View_59_5022: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_59_5023: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.9488985655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055555%")
  },
  ImageBackground_59_5024: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9022352430555562%")
  },
  View_59_5025: {
    width: wp("4.444444444444445%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772352430555554%"),
    justifyContent: "center"
  },
  Text_59_5025: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5026: {
    width: wp("17.291675143771702%"),
    height: hp("6.830606304231238%"),
    top: hp("6.967213114754095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0005425347222218768%")
  },
  View_59_5027: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_59_5028: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_59_5029: {
    width: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    top: hp("3.1420765027322446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333334%")
  },
  ImageBackground_59_5030: {
    width: wp("1.1111111111111112%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9022352430555562%")
  },
  View_59_5031: {
    width: wp("3.4722222222222223%"),
    top: hp("2.1857923497267784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772352430555554%"),
    justifyContent: "center"
  },
  Text_59_5031: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5032: {
    width: wp("17.291670905219185%"),
    height: hp("13.661203228059362%"),
    top: hp("14.207650273224047%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_5033: {
    width: wp("8.541667196485731%"),
    height: hp("13.661203228059362%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.75%")
  },
  View_59_5034: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_59_5035: {
    width: wp("0.7638888888888888%"),
    height: hp("1.5027322404371584%"),
    top: hp("1.3661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.083333333333334%")
  },
  View_59_5036: {
    width: wp("3.680555555555556%"),
    top: hp("4.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4305555555555554%"),
    justifyContent: "center"
  },
  Text_59_5036: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5037: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_5038: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_59_5039: {
    width: wp("0.7638888888888888%"),
    height: hp("1.5027322404371584%"),
    top: hp("1.3661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.083333333333334%")
  },
  View_59_5040: {
    width: wp("3.8194444444444446%"),
    top: hp("4.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.430555555555556%"),
    justifyContent: "center"
  },
  Text_59_5040: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5041: {
    width: wp("17.291670905219185%"),
    height: hp("13.661202185792352%"),
    top: hp("28.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_5042: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.75%")
  },
  View_59_5043: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_59_5044: {
    width: wp("0.7638888888888888%"),
    height: hp("1.5027322404371584%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.083333333333334%")
  },
  View_59_5045: {
    width: wp("2.361111111111111%"),
    top: hp("4.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1249999999999982%"),
    justifyContent: "center"
  },
  Text_59_5045: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5046: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_5047: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_59_5048: {
    width: wp("0.7638888888888888%"),
    height: hp("1.5027322404371584%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.083333333333334%")
  },
  View_59_5049: {
    width: wp("3.75%"),
    top: hp("5.601092896174869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.430555555555556%"),
    justifyContent: "center"
  },
  Text_59_5049: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5050: {
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
  View_59_5051: {
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
  View_59_5052: {
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
  View_59_5053: {
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
  Text_59_5053: {
    color: "rgba(132, 133, 154, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_59_5054: {
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
  View_59_5055: {
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
  View_59_5056: {
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
  View_59_5057: {
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
  View_59_5058: {
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
  Text_59_5058: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_59_5059: {
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
  View_59_5060: {
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
  View_59_5061: {
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
  View_59_5062: {
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
  Text_59_5062: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_59_5063: {
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
  View_59_5064: {
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
  View_59_5065: {
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
  View_59_5066: {
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
  Text_59_5066: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_59_5067: {
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
  View_59_5068: {
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
  View_59_5069: {
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
  View_59_5070: {
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
  Text_59_5070: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5071: {
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
  View_59_5072: {
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
  View_59_5073: {
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
  View_59_5074: {
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
  Text_59_5074: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5075: {
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
  View_59_5076: {
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
  View_59_5077: {
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
  Text_59_5077: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5078: {
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
  View_59_5079: {
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
  View_59_5080: {
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
  Text_59_5080: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5081: {
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
  View_I59_5081_5_71: {
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
  View_59_5082: {
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
  View_I59_5082_5_73: {
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
  View_I59_5082_5_74: {
    flexGrow: 1,
    width: wp("2.6016635364956326%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.70505099826389%"),
    top: hp("0.9562841530054645%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I59_5082_5_75: {
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
  View_I59_5082_5_76: {
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
  View_I59_5082_5_77: {
    flexGrow: 1,
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.158935546875%"),
    top: hp("1.639344262295082%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I59_5082_5_78: {
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
  View_I59_5082_5_79: {
    flexGrow: 1,
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.51852756076389%"),
    top: hp("1.639344262295082%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I59_5082_5_80: {
    flexGrow: 1,
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.338731553819445%"),
    top: hp("1.639344262295082%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I59_5082_5_81: {
    flexGrow: 1,
    width: wp("6.2873538335164385%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.875%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I59_5082_5_81: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_59_5083: {
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
  ImageBackground_59_5084: {
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
  View_59_5085: {
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
  View_59_5086: {
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
  View_59_5087: {
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
  View_59_5088: {
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
  ImageBackground_59_5089: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("1.775956284153004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_59_5090: {
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
  View_59_5091: {
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
  View_59_5092: {
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
  Text_59_5092: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5093: {
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
  View_59_5094: {
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
  View_59_5095: {
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
  View_59_5096: {
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
  ImageBackground_59_5097: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("1.7759562841530112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.250000000000007%")
  },
  View_59_5098: {
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
  View_59_5099: {
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
  View_59_5100: {
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
  Text_59_5100: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5101: {
    width: wp("7.222222222222221%"),
    minWidth: wp("7.222222222222221%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.958333333333336%"),
    top: hp("86.20218579234972%")
  },
  View_59_5102: {
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
  View_59_5103: {
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
  View_59_5104: {
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
  ImageBackground_59_5105: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("1.7759562841530112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2499999999999964%")
  },
  View_59_5106: {
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
  View_59_5107: {
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
  View_59_5108: {
    width: wp("0.5555555555555556%"),
    minWidth: wp("0.5555555555555556%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333357%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_59_5108: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5109: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.15277777777778%"),
    top: hp("74.4535519125683%")
  },
  View_59_5110: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_5111: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_5112: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
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
  ImageBackground_59_5113: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("1.7759562841530112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_59_5114: {
    width: wp("8.26388888888889%"),
    minWidth: wp("8.26388888888889%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("0.9562841530054698%")
  },
  View_59_5115: {
    width: wp("8.26388888888889%"),
    minWidth: wp("8.26388888888889%"),
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
  View_59_5116: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888857%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_59_5116: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5117: {
    width: wp("10.833333333333334%"),
    minWidth: wp("10.833333333333334%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.958333333333336%"),
    top: hp("62.568306010928964%")
  },
  View_59_5118: {
    width: wp("10.833333333333334%"),
    minWidth: wp("10.833333333333334%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_5119: {
    width: wp("10.833333333333334%"),
    minWidth: wp("10.833333333333334%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_5120: {
    width: wp("10.833333333333334%"),
    minWidth: wp("10.833333333333334%"),
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
  ImageBackground_59_5121: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_59_5122: {
    width: wp("7.083333333333333%"),
    minWidth: wp("7.083333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("0.9562841530054627%")
  },
  View_59_5123: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
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
  ImageBackground_59_5124: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("1.6393442622950758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%")
  },
  View_59_5125: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444358%"),
    top: hp("0.8196721311475343%"),
    justifyContent: "center"
  },
  Text_59_5125: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_5126: {
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
  View_59_5130: {
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
  View_59_5131: {
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
  View_59_5132: {
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
  View_59_5133: {
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
  ImageBackground_59_5134: {
    width: wp("0.9722222222222222%"),
    height: hp("2.3224043715846996%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.249999999999993%")
  },
  View_59_5135: {
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
  View_59_5136: {
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
  View_59_5137: {
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
  Text_59_5137: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5138: {
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
  View_59_5139: {
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
  View_59_5140: {
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
  View_59_5141: {
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
  ImageBackground_59_5142: {
    width: wp("0.9722222222222222%"),
    height: hp("2.3224043715846996%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.249999999999993%")
  },
  View_59_5143: {
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
  View_59_5144: {
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
  View_59_5145: {
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
  Text_59_5145: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5146: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.861111111111114%"),
    top: hp("119.53551912568305%")
  },
  View_59_5147: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_5148: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_5149: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
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
  ImageBackground_59_5150: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.249999999999993%")
  },
  View_59_5151: {
    width: wp("7.5%"),
    minWidth: wp("7.5%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.05555555555555%"),
    top: hp("0.9562841530054556%")
  },
  View_59_5152: {
    width: wp("7.5%"),
    minWidth: wp("7.5%"),
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
  View_59_5153: {
    width: wp("5.277777777777778%"),
    minWidth: wp("5.277777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: hp("0.8196721311475557%"),
    justifyContent: "center"
  },
  Text_59_5153: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5154: {
    width: wp("10.48611111111111%"),
    minWidth: wp("10.48611111111111%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.84722222222223%"),
    top: hp("93.30601092896174%")
  },
  View_59_5155: {
    width: wp("10.48611111111111%"),
    minWidth: wp("10.48611111111111%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_5156: {
    width: wp("10.48611111111111%"),
    minWidth: wp("10.48611111111111%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_5157: {
    width: wp("10.48611111111111%"),
    minWidth: wp("10.48611111111111%"),
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
  ImageBackground_59_5158: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("2.5956284153005527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.958333333333329%")
  },
  ImageBackground_59_5159: {
    width: wp("1.1111111111111112%"),
    height: hp("2.3224043715846996%"),
    top: hp("1.639344262295097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2499999999999858%")
  },
  View_59_5160: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("0.956284153005484%")
  },
  View_59_5161: {
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
  View_59_5162: {
    width: wp("2.361111111111111%"),
    minWidth: wp("2.361111111111111%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333286%"),
    top: hp("0.8196721311475272%"),
    justifyContent: "center"
  },
  Text_59_5162: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5163: {
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
  View_59_5164: {
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
  View_59_5165: {
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
  View_59_5166: {
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
  ImageBackground_59_5167: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("1.775956284153004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_59_5168: {
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
  View_59_5169: {
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
  View_59_5170: {
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
  Text_59_5170: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5171: {
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
  View_59_5172: {
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
  View_59_5173: {
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
  View_59_5174: {
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
  ImageBackground_59_5175: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("2.5956284153005384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.972222222222214%")
  },
  ImageBackground_59_5176: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_59_5177: {
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
  View_59_5178: {
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
  View_59_5179: {
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
  Text_59_5179: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5180: {
    width: wp("52.84722222222222%"),
    minWidth: wp("52.84722222222222%"),
    height: hp("60.65573770491803%"),
    minHeight: hp("60.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.041666666666664%"),
    top: hp("36.20218579234973%")
  },
  ImageBackground_59_5181: {
    width: wp("10.13888888888889%"),
    minWidth: wp("10.13888888888889%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9583333333333357%"),
    top: hp("12.978142076502728%")
  },
  ImageBackground_59_5184: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.833333333333336%"),
    top: hp("12.704918032786878%")
  },
  ImageBackground_59_5188: {
    width: wp("0.8333336644702488%"),
    minWidth: wp("0.8333336644702488%"),
    height: hp("13.524590163934427%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.69444444444445%"),
    top: hp("15.573770491803273%")
  },
  ImageBackground_59_5191: {
    width: wp("12.986111111111112%"),
    minWidth: wp("12.986111111111112%"),
    height: hp("14.344266464150019%"),
    minHeight: hp("14.344266464150019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.97222222222222%"),
    top: hp("0%")
  },
  ImageBackground_59_5195: {
    width: wp("0.8333336644702488%"),
    minWidth: wp("0.8333336644702488%"),
    height: hp("14.89071038251366%"),
    minHeight: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: hp("2.7322404371584668%")
  },
  ImageBackground_59_5199: {
    width: wp("0.8333343929714626%"),
    minWidth: wp("0.8333343929714626%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.69444444444445%"),
    top: hp("34.426229508196705%")
  },
  ImageBackground_59_5203: {
    width: wp("1.697506904602051%"),
    minWidth: wp("1.697506904602051%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.52476671006945%"),
    top: hp("49.04371584699452%")
  },
  ImageBackground_59_5207: {
    width: wp("14.51388888888889%"),
    minWidth: wp("14.51388888888889%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.41530054644808%")
  },
  View_59_5211: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.66666666666667%"),
    top: hp("76.775956284153%")
  },
  View_59_5212: {
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
  View_59_5213: {
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
  View_59_5214: {
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
  ImageBackground_59_5215: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("1.7759562841530112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.249999999999993%")
  },
  View_59_5216: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9861111111111%"),
    top: hp("0.9562841530054698%")
  },
  View_59_5217: {
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
  View_59_5218: {
    width: wp("1.597222222222222%"),
    minWidth: wp("1.597222222222222%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222285%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_59_5218: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5219: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.44444444444444%"),
    top: hp("95.49180327868852%")
  },
  View_59_5220: {
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
  View_59_5221: {
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
  View_59_5222: {
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
  ImageBackground_59_5223: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("2.5956284153005527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.972222222222221%")
  },
  ImageBackground_59_5224: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_59_5225: {
    width: wp("7.222222222222221%"),
    minWidth: wp("7.222222222222221%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("0.9562841530054698%")
  },
  View_59_5226: {
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
  View_59_5227: {
    width: wp("5.694444444444445%"),
    minWidth: wp("5.694444444444445%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333357%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_59_5227: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_5228: {
    width: wp("6.388888888888888%"),
    minWidth: wp("6.388888888888888%"),
    height: hp("7.786886288168652%"),
    minHeight: hp("7.786886288168652%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.15277777777778%"),
    top: hp("79.09836065573771%")
  },
  ImageBackground_59_5232: {
    width: wp("8.420671357048883%"),
    minWidth: wp("8.420671357048883%"),
    height: hp("7.146685240698643%"),
    minHeight: hp("7.146685240698643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.68055555555556%"),
    top: hp("74.73267935664276%")
  },
  ImageBackground_59_5236: {
    width: wp("6.388888888888888%"),
    minWidth: wp("6.388888888888888%"),
    height: hp("7.786886288168652%"),
    minHeight: hp("7.786886288168652%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.708333333333336%"),
    top: hp("67.34972677595628%")
  },
  ImageBackground_59_5240: {
    width: wp("1.697506904602051%"),
    minWidth: wp("1.697506904602051%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.98611111111111%"),
    top: hp("95.49180327868852%")
  },
  ImageBackground_59_5244: {
    width: wp("14.583333333333334%"),
    minWidth: wp("14.583333333333334%"),
    height: hp("14.344266464150019%"),
    minHeight: hp("14.344266464150019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.69444444444444%"),
    top: hp("108.74316939890711%")
  },
  ImageBackground_59_5248: {
    width: wp("14.51388888888889%"),
    minWidth: wp("14.51388888888889%"),
    height: hp("34.83606557377049%"),
    minHeight: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.76388888888889%"),
    top: hp("88.25136612021858%")
  },
  ImageBackground_59_5252: {
    width: wp("0.8333336644702488%"),
    minWidth: wp("0.8333336644702488%"),
    height: hp("14.89071038251366%"),
    minHeight: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.13888888888889%"),
    top: hp("81.4207650273224%")
  },
  View_59_5256: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.08333333333333%"),
    top: hp("97.95081967213115%")
  },
  ImageBackground_59_5257: {
    width: wp("1.0763888888888888%"),
    minWidth: wp("1.0763888888888888%"),
    height: hp("2.527322404371585%"),
    minHeight: hp("2.527322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: hp("0.1366120218579283%")
  },
  ImageBackground_59_5258: {
    width: wp("1.1805555555555556%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_5259: {
    width: wp("23.055555555555557%"),
    minWidth: wp("23.055555555555557%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.47222222222222%"),
    top: hp("101.77595628415301%")
  },
  View_59_5260: {
    width: wp("23.055555555555557%"),
    minWidth: wp("23.055555555555557%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
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
  View_59_5261: {
    width: wp("21.666666666666668%"),
    minWidth: wp("21.666666666666668%"),
    height: hp("9.972677595628415%"),
    minHeight: hp("9.972677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    top: hp("5.8743169398907185%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(206, 212, 218, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_59_5262: {
    width: wp("6.944444444444445%"),
    top: hp("1.775956284152997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888857%"),
    justifyContent: "center"
  },
  Text_59_5262: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_5263: {
    width: wp("20.416666666666668%"),
    minWidth: wp("20.416666666666668%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888928%"),
    top: hp("7.103825136612016%"),
    justifyContent: "flex-start"
  },
  Text_59_5263: {
    color: "rgba(66, 66, 66, 1)",
    fontSize: 10,
    fontWeight: "400",
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
