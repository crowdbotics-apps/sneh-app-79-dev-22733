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
      <View style={styles.View_59_4246} />
      <View style={styles.View_59_4253}>
        <Text style={styles.Text_59_4253}>secondary nav</Text>
      </View>
      <View style={styles.View_59_4254} />
      <View style={styles.View_59_4255}>
        <View style={styles.View_59_4256}>
          <View style={styles.View_59_4257}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3292/0d89/1f9fa84df59bd9de0ca83419f634c292"
              }}
              style={styles.ImageBackground_59_4258}
            />
            <View style={styles.View_59_4259}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8e3/a650/5c586e9ce839dc2623ee27d433aad132"
                }}
                style={styles.ImageBackground_59_4260}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea3/115f/bd7efe815fceeeb8e26cc53554552b0b"
                }}
                style={styles.ImageBackground_59_4261}
              />
            </View>
            <View style={styles.View_59_4262}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea3/115f/bd7efe815fceeeb8e26cc53554552b0b"
                }}
                style={styles.ImageBackground_59_4263}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cd5/5d65/13a41a7408223ef692ddf55ab2276a90"
                }}
                style={styles.ImageBackground_59_4264}
              />
            </View>
            <View style={styles.View_59_4265}>
              <View style={styles.View_59_4266}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65d0/435a/a0a2465cc4f5d29b73fc0efffd3203fb"
                  }}
                  style={styles.ImageBackground_59_4267}
                />
                <View style={styles.View_59_4268}>
                  <Text style={styles.Text_59_4268}>
                    Iphone 11 Pro Max 414 px 896 px
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06e5/e82c/fa1df0e483f28bc7640260f791b0debf"
                }}
                style={styles.ImageBackground_59_4269}
              />
            </View>
            <View style={styles.View_59_4270}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f2a/0d00/cf7445148d923a6c658105e1f7feb5ab"
                }}
                style={styles.ImageBackground_59_4271}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f2a/0d00/cf7445148d923a6c658105e1f7feb5ab"
                }}
                style={styles.ImageBackground_59_4272}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bae9/73cd/ad6584a7ec9a51d671c3568db27f98cf"
                }}
                style={styles.ImageBackground_59_4273}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bae9/73cd/ad6584a7ec9a51d671c3568db27f98cf"
                }}
                style={styles.ImageBackground_59_4274}
              />
              <View style={styles.View_59_4275} />
              <View style={styles.View_59_4276} />
              <View style={styles.View_59_4277} />
              <View style={styles.View_59_4278} />
            </View>
            <View style={styles.View_59_4279}>
              <View style={styles.View_59_4280} />
              <View style={styles.View_59_4281} />
              <View style={styles.View_59_4282}>
                <Text style={styles.Text_59_4282}>Zoom 100%</Text>
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
        style={styles.ImageBackground_59_4283}
      />
      <View style={styles.View_59_4284}>
        <View style={styles.View_59_4285} />
        <View style={styles.View_59_4286} />
        <View style={styles.View_59_4287}>
          <Text style={styles.Text_59_4287}>Sign Up</Text>
        </View>
      </View>
      <View style={styles.View_59_4288}>
        <View style={styles.View_59_4289} />
        <View style={styles.View_59_4290}>
          <Text style={styles.Text_59_4290}>Username</Text>
        </View>
        <View style={styles.View_59_4291} />
        <View style={styles.View_59_4292}>
          <Text style={styles.Text_59_4292}>abc</Text>
        </View>
      </View>
      <View style={styles.View_59_4293}>
        <View style={styles.View_59_4294} />
        <View style={styles.View_59_4295}>
          <Text style={styles.Text_59_4295}>Password</Text>
        </View>
        <View style={styles.View_59_4296} />
        <View style={styles.View_59_4297}>
          <Text style={styles.Text_59_4297}>***</Text>
        </View>
      </View>
      <View style={styles.View_59_4298}>
        <View style={styles.View_59_4299} />
        <View style={styles.View_59_4300} />
        <View style={styles.View_59_4301}>
          <Text style={styles.Text_59_4301}>***</Text>
        </View>
        <View style={styles.View_59_4302}>
          <Text style={styles.Text_59_4302}>Validate Password</Text>
        </View>
      </View>
      <View style={styles.View_59_4303}>
        <View style={styles.View_59_4304}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7a0/5ed6/6f2a7ebdd170ca737868dcc29bfdb00f"
            }}
            style={styles.ImageBackground_59_4305}
          />
          <View style={styles.View_59_4306}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cc6/24b9/8139ca9e37f930d0ec3fa677e8beca39"
              }}
              style={styles.ImageBackground_59_4307}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_59_4311}>
        <View style={styles.View_59_4312}>
          <View style={styles.View_59_4313} />
          <View style={styles.View_59_4314}>
            <View style={styles.View_59_4315} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
              }}
              style={styles.ImageBackground_59_4316}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f34a/2c2b/c7e7f301dd64736fc18906603e2e36df"
              }}
              style={styles.ImageBackground_59_4317}
            />
            <View style={styles.View_59_4318}>
              <Text style={styles.Text_59_4318}>Logic elements</Text>
            </View>
          </View>
          <View style={styles.View_59_4319}>
            <View style={styles.View_59_4320} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
              }}
              style={styles.ImageBackground_59_4321}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a47f/dce3/6934bf4bc5b860e49114ea02a57ba322"
              }}
              style={styles.ImageBackground_59_4322}
            />
            <View style={styles.View_59_4323}>
              <Text style={styles.Text_59_4323}>Triggers</Text>
            </View>
          </View>
          <View style={styles.View_59_4324}>
            <View style={styles.View_59_4325} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
              }}
              style={styles.ImageBackground_59_4326}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e15/9f3b/18be2dac5ae6daa0758574b8392c16e0"
              }}
              style={styles.ImageBackground_59_4327}
            />
            <View style={styles.View_59_4328}>
              <Text style={styles.Text_59_4328}>Data</Text>
            </View>
          </View>
          <View style={styles.View_59_4329}>
            <View style={styles.View_59_4330} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3eb2/f74c/b5a662fcef5eef3cf60f6e7500d4d4af"
              }}
              style={styles.ImageBackground_59_4331}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
              }}
              style={styles.ImageBackground_59_4332}
            />
            <View style={styles.View_59_4333}>
              <Text style={styles.Text_59_4333}>Transforms</Text>
            </View>
          </View>
          <View style={styles.View_59_4334}>
            <View style={styles.View_59_4335} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
              }}
              style={styles.ImageBackground_59_4336}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c84/01de/a011b5e329f5ac82e119eed4c7e286aa"
              }}
              style={styles.ImageBackground_59_4337}
            />
            <View style={styles.View_59_4338}>
              <Text style={styles.Text_59_4338}>3rd Party API</Text>
            </View>
          </View>
          <View style={styles.View_59_4339}>
            <View style={styles.View_59_4340} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
              }}
              style={styles.ImageBackground_59_4341}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b0c/5661/cfd08146c10c6902a35fa9e6e231467a"
              }}
              style={styles.ImageBackground_59_4342}
            />
            <View style={styles.View_59_4343}>
              <Text style={styles.Text_59_4343}>Messages</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_59_4344}>
          <View style={styles.View_59_4345} />
          <View style={styles.View_59_4346} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4017/21d4/92811b55dfc3399a398feab0d0f822d7"
            }}
            style={styles.ImageBackground_59_4347}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05b2/5ae6/38da62105a984cb8d31dcdddaa5f7443"
            }}
            style={styles.ImageBackground_59_4348}
          />
          <View style={styles.View_59_4349}>
            <Text style={styles.Text_59_4349}>Actions</Text>
          </View>
        </View>
        <View style={styles.View_59_4350}>
          <View style={styles.View_59_4351}>
            <View style={styles.View_59_4352} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/740b/dc05/d3e2195f94a4a534df1f8dd35fb747aa"
              }}
              style={styles.ImageBackground_59_4353}
            />
            <View style={styles.View_59_4354}>
              <Text style={styles.Text_59_4354}>Element Property</Text>
            </View>
          </View>
          <View style={styles.View_59_4355}>
            <View style={styles.View_59_4356} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/740b/dc05/d3e2195f94a4a534df1f8dd35fb747aa"
              }}
              style={styles.ImageBackground_59_4357}
            />
            <View style={styles.View_59_4358}>
              <Text style={styles.Text_59_4358}>Call endpoint</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_59_4359}>
          <View style={styles.View_59_4360}>
            <View style={styles.View_59_4361} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/740b/dc05/d3e2195f94a4a534df1f8dd35fb747aa"
              }}
              style={styles.ImageBackground_59_4362}
            />
            <View style={styles.View_59_4363}>
              <Text style={styles.Text_59_4363}>Send Email</Text>
            </View>
          </View>
          <View style={styles.View_59_4364}>
            <View style={styles.View_59_4365} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/740b/dc05/d3e2195f94a4a534df1f8dd35fb747aa"
              }}
              style={styles.ImageBackground_59_4366}
            />
            <View style={styles.View_59_4367}>
              <Text style={styles.Text_59_4367}>Navigate</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_59_4368}>
        <View style={styles.View_59_4369}>
          <View style={styles.View_59_4370} />
          <View style={styles.View_59_4371}>
            <Text style={styles.Text_59_4371}>Cancel</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_4372}>
        <View style={styles.View_59_4373}>
          <View style={styles.View_59_4374} />
          <View style={styles.View_59_4375} />
          <View style={styles.View_59_4376}>
            <Text style={styles.Text_59_4376}>save</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_4377}>
        <View style={styles.View_59_4378}>
          <View style={styles.View_59_4379} />
          <View style={styles.View_59_4380}>
            <Text style={styles.Text_59_4380}>properties</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_4381}>
        <View style={styles.View_59_4382}>
          <View style={styles.View_59_4383} />
          <View style={styles.View_59_4384}>
            <Text style={styles.Text_59_4384}>figma import</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_4385}>
        <View style={styles.View_59_4386}>
          <View style={styles.View_59_4387} />
          <View style={styles.View_59_4388}>
            <Text style={styles.Text_59_4388}>Connectors</Text>
          </View>
        </View>
        <View style={styles.View_59_4389}>
          <View style={styles.View_59_4390} />
          <View style={styles.View_59_4391} />
          <View style={styles.View_59_4392}>
            <Text style={styles.Text_59_4392}>Functions</Text>
          </View>
        </View>
        <View style={styles.View_59_4393}>
          <View style={styles.View_59_4394} />
          <View style={styles.View_59_4395}>
            <Text style={styles.Text_59_4395}>Design</Text>
          </View>
        </View>
        <View style={styles.View_59_4396}>
          <View style={styles.View_59_4397} />
          <View style={styles.View_59_4398}>
            <Text style={styles.Text_59_4398}>Editor</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_4399}>
        <View style={styles.View_I59_4399_5_71} />
      </View>
      <View style={styles.View_59_4400}>
        <View style={styles.View_I59_4400_5_73} />
        <View style={styles.View_I59_4400_5_74} />
        <View style={styles.View_I59_4400_5_75} />
        <View style={styles.View_I59_4400_5_76} />
        <View style={styles.View_I59_4400_5_77} />
        <View style={styles.View_I59_4400_5_78} />
        <View style={styles.View_I59_4400_5_79} />
        <View style={styles.View_I59_4400_5_80} />
        <View style={styles.View_I59_4400_5_81}>
          <Text style={styles.Text_I59_4400_5_81}>main nav</Text>
        </View>
      </View>
      <View style={styles.View_59_4401} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3486/062b/f30ae9bfa8cfb4121baa42087fe0505e"
        }}
        style={styles.ImageBackground_59_4402}
      />
      <View style={styles.View_59_4403}>
        <View style={styles.View_59_4404}>
          <View style={styles.View_59_4405}>
            <View style={styles.View_59_4406} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f34a/2c2b/c7e7f301dd64736fc18906603e2e36df"
              }}
              style={styles.ImageBackground_59_4407}
            />
          </View>
        </View>
        <View style={styles.View_59_4408}>
          <View style={styles.View_59_4409} />
          <View style={styles.View_59_4410}>
            <Text style={styles.Text_59_4410}>If / Else</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_4411}>
        <View style={styles.View_59_4412}>
          <View style={styles.View_59_4413}>
            <View style={styles.View_59_4414} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f34a/2c2b/c7e7f301dd64736fc18906603e2e36df"
              }}
              style={styles.ImageBackground_59_4415}
            />
          </View>
        </View>
        <View style={styles.View_59_4416}>
          <View style={styles.View_59_4417} />
          <View style={styles.View_59_4418}>
            <Text style={styles.Text_59_4418}>if</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_4419}>
        <View style={styles.View_59_4420}>
          <View style={styles.View_59_4421}>
            <View style={styles.View_59_4422} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f34a/2c2b/c7e7f301dd64736fc18906603e2e36df"
              }}
              style={styles.ImageBackground_59_4423}
            />
          </View>
        </View>
        <View style={styles.View_59_4424}>
          <View style={styles.View_59_4425} />
          <View style={styles.View_59_4426}>
            <Text style={styles.Text_59_4426}>if</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_4427}>
        <View style={styles.View_59_4428}>
          <View style={styles.View_59_4429}>
            <View style={styles.View_59_4430} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f34a/2c2b/c7e7f301dd64736fc18906603e2e36df"
              }}
              style={styles.ImageBackground_59_4431}
            />
          </View>
        </View>
        <View style={styles.View_59_4432}>
          <View style={styles.View_59_4433} />
          <View style={styles.View_59_4434}>
            <Text style={styles.Text_59_4434}>Action successful</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_4435}>
        <View style={styles.View_59_4436}>
          <View style={styles.View_59_4437}>
            <View style={styles.View_59_4438} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b0c/5661/cfd08146c10c6902a35fa9e6e231467a"
              }}
              style={styles.ImageBackground_59_4439}
            />
          </View>
        </View>
        <View style={styles.View_59_4440}>
          <View style={styles.View_59_4441} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/ce61/076a5fe63e6abc65488e3a62d872c9ae"
            }}
            style={styles.ImageBackground_59_4442}
          />
          <View style={styles.View_59_4443}>
            <Text style={styles.Text_59_4443}>Send email</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8aad/3cb4/f5818acda2e9183e502895e4e682b503"
        }}
        style={styles.ImageBackground_59_4444}
      />
      <View style={styles.View_59_4448}>
        <View style={styles.View_59_4449}>
          <View style={styles.View_59_4450}>
            <View style={styles.View_59_4451} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e15/9f3b/18be2dac5ae6daa0758574b8392c16e0"
              }}
              style={styles.ImageBackground_59_4452}
            />
          </View>
        </View>
        <View style={styles.View_59_4453}>
          <View style={styles.View_59_4454} />
          <View style={styles.View_59_4455}>
            <Text style={styles.Text_59_4455}>Value is equal</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_4456}>
        <View style={styles.View_59_4457}>
          <View style={styles.View_59_4458}>
            <View style={styles.View_59_4459} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e15/9f3b/18be2dac5ae6daa0758574b8392c16e0"
              }}
              style={styles.ImageBackground_59_4460}
            />
          </View>
        </View>
        <View style={styles.View_59_4461}>
          <View style={styles.View_59_4462} />
          <View style={styles.View_59_4463}>
            <Text style={styles.Text_59_4463}>IOf</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_4464}>
        <View style={styles.View_59_4465}>
          <View style={styles.View_59_4466}>
            <View style={styles.View_59_4467} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e15/9f3b/18be2dac5ae6daa0758574b8392c16e0"
              }}
              style={styles.ImageBackground_59_4468}
            />
          </View>
        </View>
        <View style={styles.View_59_4469}>
          <View style={styles.View_59_4470} />
          <View style={styles.View_59_4471}>
            <Text style={styles.Text_59_4471}>Value is not null</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_4472}>
        <View style={styles.View_59_4473}>
          <View style={styles.View_59_4474}>
            <View style={styles.View_59_4475} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/ce61/076a5fe63e6abc65488e3a62d872c9ae"
              }}
              style={styles.ImageBackground_59_4476}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb77/aaf1/6a892e155ebc05fdbaf11f53cb5f0b2a"
              }}
              style={styles.ImageBackground_59_4477}
            />
          </View>
        </View>
        <View style={styles.View_59_4478}>
          <View style={styles.View_59_4479} />
          <View style={styles.View_59_4480}>
            <Text style={styles.Text_59_4480}>Submit values</Text>
          </View>
        </View>
        <View style={styles.View_59_4481}>
          <View style={styles.View_59_4482} />
          <View style={styles.View_59_4483}>
            <Text style={styles.Text_59_4483}>Username</Text>
          </View>
          <View style={styles.View_59_4484} />
          <View style={styles.View_59_4485}>
            <Text style={styles.Text_59_4485}>Password</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_4486}>
        <View style={styles.View_59_4487}>
          <View style={styles.View_59_4488}>
            <View style={styles.View_59_4489} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/ce61/076a5fe63e6abc65488e3a62d872c9ae"
              }}
              style={styles.ImageBackground_59_4490}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3eb2/f74c/b5a662fcef5eef3cf60f6e7500d4d4af"
              }}
              style={styles.ImageBackground_59_4491}
            />
          </View>
        </View>
        <View style={styles.View_59_4492}>
          <View style={styles.View_59_4493} />
          <View style={styles.View_59_4494}>
            <Text style={styles.Text_59_4494}>Active</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_4495}>
        <View style={styles.View_59_4496}>
          <View style={styles.View_59_4497}>
            <View style={styles.View_59_4498} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f34a/2c2b/c7e7f301dd64736fc18906603e2e36df"
              }}
              style={styles.ImageBackground_59_4499}
            />
          </View>
        </View>
        <View style={styles.View_59_4500}>
          <View style={styles.View_59_4501} />
          <View style={styles.View_59_4502}>
            <Text style={styles.Text_59_4502}>Else</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_4503}>
        <View style={styles.View_59_4504}>
          <View style={styles.View_59_4505}>
            <View style={styles.View_59_4506} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/ce61/076a5fe63e6abc65488e3a62d872c9ae"
              }}
              style={styles.ImageBackground_59_4507}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b0c/5661/cfd08146c10c6902a35fa9e6e231467a"
              }}
              style={styles.ImageBackground_59_4508}
            />
            <View style={styles.View_59_4509}>
              <View style={styles.View_59_4510} />
              <View style={styles.View_59_4511}>
                <Text style={styles.Text_59_4511}>Show message</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_59_4512}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9e9/00fc/b1dec7be34e9aa1fda03e411ea0c47b0"
          }}
          style={styles.ImageBackground_59_4513}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4185/b7a9/29d83ffb505c0544e466bd39364156f8"
          }}
          style={styles.ImageBackground_59_4516}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2000/1050/0218ca79589f0494ed8d924150c37dae"
          }}
          style={styles.ImageBackground_59_4520}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/87c1/ddc7/f42cb82f38abc29d4a311e924e4cd1b0"
          }}
          style={styles.ImageBackground_59_4523}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd8f/baa6/1d43666ca035a9d7de7d0d8d2984bb08"
          }}
          style={styles.ImageBackground_59_4527}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbbb/dac2/be09854eec6c149bd7acd227a7d9bcfb"
          }}
          style={styles.ImageBackground_59_4531}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0226/2083/9421b282e7a58925d25ef3971edc6765"
          }}
          style={styles.ImageBackground_59_4535}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d015/5486/0dbe15d2d9ace3f86b74c7c4886b3fd8"
          }}
          style={styles.ImageBackground_59_4539}
        />
      </View>
      <View style={styles.View_59_4543}>
        <View style={styles.View_59_4544}>
          <View style={styles.View_59_4545}>
            <View style={styles.View_59_4546} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f34a/2c2b/c7e7f301dd64736fc18906603e2e36df"
              }}
              style={styles.ImageBackground_59_4547}
            />
          </View>
        </View>
        <View style={styles.View_59_4548}>
          <View style={styles.View_59_4549} />
          <View style={styles.View_59_4550}>
            <Text style={styles.Text_59_4550}>Else</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_59_4551}>
        <View style={styles.View_59_4552}>
          <View style={styles.View_59_4553}>
            <View style={styles.View_59_4554} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/ce61/076a5fe63e6abc65488e3a62d872c9ae"
              }}
              style={styles.ImageBackground_59_4555}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b0c/5661/cfd08146c10c6902a35fa9e6e231467a"
              }}
              style={styles.ImageBackground_59_4556}
            />
            <View style={styles.View_59_4557}>
              <View style={styles.View_59_4558} />
              <View style={styles.View_59_4559}>
                <Text style={styles.Text_59_4559}>Show message</Text>
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
        style={styles.ImageBackground_59_4560}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e97/4eaa/92087870882d1ca2242626a051f11dc8"
        }}
        style={styles.ImageBackground_59_4564}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e457/c226/572b5f348da587d0d2b8c1707f8b7958"
        }}
        style={styles.ImageBackground_59_4568}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eac/3f0f/ad55409a25dca714ed51f46091f9a394"
        }}
        style={styles.ImageBackground_59_4572}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8574/a6e7/7a7a97806b34010af29f3e179c991745"
        }}
        style={styles.ImageBackground_59_4576}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85b2/0736/e814ae8c9e29f198b3bcc15794290534"
        }}
        style={styles.ImageBackground_59_4580}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd8f/baa6/1d43666ca035a9d7de7d0d8d2984bb08"
        }}
        style={styles.ImageBackground_59_4584}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("147.54098360655738%") },
  View_59_4246: {
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
  View_59_4253: {
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
  Text_59_4253: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_59_4254: {
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
  View_59_4255: {
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
  View_59_4256: {
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
  View_59_4257: {
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
  ImageBackground_59_4258: {
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
  View_59_4259: {
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
  ImageBackground_59_4260: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_59_4261: {
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
  View_59_4262: {
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
  ImageBackground_59_4263: {
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
  ImageBackground_59_4264: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_4265: {
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
  View_59_4266: {
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
  ImageBackground_59_4267: {
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
  View_59_4268: {
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
  Text_59_4268: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_4269: {
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
  View_59_4270: {
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
  ImageBackground_59_4271: {
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
  ImageBackground_59_4272: {
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
  ImageBackground_59_4273: {
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
  ImageBackground_59_4274: {
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
  View_59_4275: {
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
  View_59_4276: {
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
  View_59_4277: {
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
  View_59_4278: {
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
  View_59_4279: {
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
  View_59_4280: {
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
  View_59_4281: {
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
  View_59_4282: {
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
  Text_59_4282: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_4283: {
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
  View_59_4284: {
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
  View_59_4285: {
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
  View_59_4286: {
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
  View_59_4287: {
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
  Text_59_4287: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4288: {
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
  View_59_4289: {
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
  View_59_4290: {
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
  Text_59_4290: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4291: {
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
  View_59_4292: {
    width: wp("1.8055555555555554%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.875%"),
    justifyContent: "center"
  },
  Text_59_4292: {
    color: "rgba(170, 170, 189, 1)",
    fontSize: 7,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4293: {
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
  View_59_4294: {
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
  View_59_4295: {
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
  Text_59_4295: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4296: {
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
  View_59_4297: {
    width: wp("1.8055555555555554%"),
    top: hp("2.5956284153005384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.875%"),
    justifyContent: "center"
  },
  Text_59_4297: {
    color: "rgba(170, 170, 189, 1)",
    fontSize: 7,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4298: {
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
  View_59_4299: {
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
  View_59_4300: {
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
  View_59_4301: {
    width: wp("1.8055555555555554%"),
    top: hp("2.5956284153005456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444429%"),
    justifyContent: "center"
  },
  Text_59_4301: {
    color: "rgba(170, 170, 189, 1)",
    fontSize: 7,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4302: {
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
  Text_59_4302: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4303: {
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
  View_59_4304: {
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
  ImageBackground_59_4305: {
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
  View_59_4306: {
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
  ImageBackground_59_4307: {
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
  View_59_4311: {
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
  View_59_4312: {
    width: wp("17.292177412245007%"),
    height: hp("126.77595628415301%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_4313: {
    width: wp("17.291666666666668%"),
    height: hp("49.59016393442623%"),
    top: hp("77.18579234972677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_59_4314: {
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
  View_59_4315: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_59_4316: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.9488985655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055555%")
  },
  ImageBackground_59_4317: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9716796875%")
  },
  View_59_4318: {
    width: wp("6.805555555555555%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772352430555554%"),
    justifyContent: "center"
  },
  Text_59_4318: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4319: {
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
  View_59_4320: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_59_4321: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.9488985655737636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055555%")
  },
  ImageBackground_59_4322: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590163934426172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9716796875%")
  },
  View_59_4323: {
    width: wp("3.680555555555556%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772352430555554%"),
    justifyContent: "center"
  },
  Text_59_4323: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4324: {
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
  View_59_4325: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_59_4326: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.9488985655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055555%")
  },
  ImageBackground_59_4327: {
    width: wp("0.9722222222222222%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9716796875%")
  },
  View_59_4328: {
    width: wp("2.1527777777777777%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772352430555554%"),
    justifyContent: "center"
  },
  Text_59_4328: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4329: {
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
  View_59_4330: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_59_4331: {
    width: wp("1.1111111111111112%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.3224043715847102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9022352430555562%")
  },
  ImageBackground_59_4332: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.948931918118163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055555%")
  },
  View_59_4333: {
    width: wp("5.277777777777778%"),
    top: hp("2.185825702271174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772352430555554%"),
    justifyContent: "center"
  },
  Text_59_4333: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4334: {
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
  View_59_4335: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_59_4336: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.9488985655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055555%")
  },
  ImageBackground_59_4337: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9716796875%")
  },
  View_59_4338: {
    width: wp("5.902777777777778%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772352430555554%"),
    justifyContent: "center"
  },
  Text_59_4338: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4339: {
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
  View_59_4340: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_59_4341: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.9488985655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055555%")
  },
  ImageBackground_59_4342: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9022352430555562%")
  },
  View_59_4343: {
    width: wp("4.444444444444445%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772352430555554%"),
    justifyContent: "center"
  },
  Text_59_4343: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4344: {
    width: wp("17.291675143771702%"),
    height: hp("6.830606304231238%"),
    top: hp("6.967213114754095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0005425347222218768%")
  },
  View_59_4345: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_59_4346: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_59_4347: {
    width: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    top: hp("3.1420765027322446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333334%")
  },
  ImageBackground_59_4348: {
    width: wp("1.1111111111111112%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.902303059895833%")
  },
  View_59_4349: {
    width: wp("3.4722222222222223%"),
    top: hp("2.1857923497267784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7772352430555554%"),
    justifyContent: "center"
  },
  Text_59_4349: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4350: {
    width: wp("17.291670905219185%"),
    height: hp("13.661203228059362%"),
    top: hp("14.207650273224047%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_4351: {
    width: wp("8.541667196485731%"),
    height: hp("13.661203228059362%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.75%")
  },
  View_59_4352: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_59_4353: {
    width: wp("0.7638888888888888%"),
    height: hp("1.5027322404371584%"),
    top: hp("1.3661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.083333333333334%")
  },
  View_59_4354: {
    width: wp("3.680555555555556%"),
    top: hp("4.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4305555555555554%"),
    justifyContent: "center"
  },
  Text_59_4354: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4355: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_4356: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_59_4357: {
    width: wp("0.7638888888888888%"),
    height: hp("1.5027322404371584%"),
    top: hp("1.3661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.083333333333334%")
  },
  View_59_4358: {
    width: wp("3.8194444444444446%"),
    top: hp("4.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.430555555555556%"),
    justifyContent: "center"
  },
  Text_59_4358: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4359: {
    width: wp("17.291670905219185%"),
    height: hp("13.661202185792352%"),
    top: hp("28.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_4360: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.75%")
  },
  View_59_4361: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_59_4362: {
    width: wp("0.7638888888888888%"),
    height: hp("1.5027322404371584%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.083333333333334%")
  },
  View_59_4363: {
    width: wp("2.361111111111111%"),
    top: hp("4.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1249999999999982%"),
    justifyContent: "center"
  },
  Text_59_4363: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4364: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_59_4365: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_59_4366: {
    width: wp("0.7638888888888888%"),
    height: hp("1.5027322404371584%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.083333333333334%")
  },
  View_59_4367: {
    width: wp("3.75%"),
    top: hp("5.601092896174869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.430555555555556%"),
    justifyContent: "center"
  },
  Text_59_4367: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4368: {
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
  View_59_4369: {
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
  View_59_4370: {
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
  View_59_4371: {
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
  Text_59_4371: {
    color: "rgba(132, 133, 154, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_59_4372: {
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
  View_59_4373: {
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
  View_59_4374: {
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
  View_59_4375: {
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
  View_59_4376: {
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
  Text_59_4376: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_59_4377: {
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
  View_59_4378: {
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
  View_59_4379: {
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
  View_59_4380: {
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
  Text_59_4380: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_59_4381: {
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
  View_59_4382: {
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
  View_59_4383: {
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
  View_59_4384: {
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
  Text_59_4384: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_59_4385: {
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
  View_59_4386: {
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
  View_59_4387: {
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
  View_59_4388: {
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
  Text_59_4388: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4389: {
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
  View_59_4390: {
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
  View_59_4391: {
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
  View_59_4392: {
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
  Text_59_4392: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4393: {
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
  View_59_4394: {
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
  View_59_4395: {
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
  Text_59_4395: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4396: {
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
  View_59_4397: {
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
  View_59_4398: {
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
  Text_59_4398: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4399: {
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
  View_I59_4399_5_71: {
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
  View_59_4400: {
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
  View_I59_4400_5_73: {
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
  View_I59_4400_5_74: {
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
  View_I59_4400_5_75: {
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
  View_I59_4400_5_76: {
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
  View_I59_4400_5_77: {
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
  View_I59_4400_5_78: {
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
  View_I59_4400_5_79: {
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
  View_I59_4400_5_80: {
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
  View_I59_4400_5_81: {
    flexGrow: 1,
    width: wp("6.2873538335164385%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.875%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I59_4400_5_81: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_59_4401: {
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
  ImageBackground_59_4402: {
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
  View_59_4403: {
    width: wp("8.26388888888889%"),
    minWidth: wp("8.26388888888889%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.06944444444444%"),
    top: hp("46.994535519125684%")
  },
  View_59_4404: {
    width: wp("8.26388888888889%"),
    minWidth: wp("8.26388888888889%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_4405: {
    width: wp("8.26388888888889%"),
    minWidth: wp("8.26388888888889%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_4406: {
    width: wp("8.26388888888889%"),
    minWidth: wp("8.26388888888889%"),
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
  ImageBackground_59_4407: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("1.775956284153004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_59_4408: {
    width: wp("4.513888888888888%"),
    minWidth: wp("4.513888888888888%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("0.9562841530054627%")
  },
  View_59_4409: {
    width: wp("4.513888888888888%"),
    minWidth: wp("4.513888888888888%"),
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
  View_59_4410: {
    width: wp("2.8472222222222223%"),
    minWidth: wp("2.8472222222222223%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333286%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_59_4410: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4411: {
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
  View_59_4412: {
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
  View_59_4413: {
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
  View_59_4414: {
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
  ImageBackground_59_4415: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("1.7759562841530112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.250000000000007%")
  },
  View_59_4416: {
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
  View_59_4417: {
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
  View_59_4418: {
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
  Text_59_4418: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4419: {
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
  View_59_4420: {
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
  View_59_4421: {
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
  View_59_4422: {
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
  ImageBackground_59_4423: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("1.7759562841530112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2499999999999964%")
  },
  View_59_4424: {
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
  View_59_4425: {
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
  View_59_4426: {
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
  Text_59_4426: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4427: {
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
  View_59_4428: {
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
  View_59_4429: {
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
  View_59_4430: {
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
  ImageBackground_59_4431: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("1.7759562841530112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_59_4432: {
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
  View_59_4433: {
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
  View_59_4434: {
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
  Text_59_4434: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4435: {
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
  View_59_4436: {
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
  View_59_4437: {
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
  View_59_4438: {
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
  ImageBackground_59_4439: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_59_4440: {
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
  View_59_4441: {
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
  ImageBackground_59_4442: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("1.6393442622950758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%")
  },
  View_59_4443: {
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
  Text_59_4443: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_4444: {
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
  View_59_4448: {
    width: wp("22.15277777777778%"),
    minWidth: wp("22.15277777777778%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.01388888888889%"),
    top: hp("46.994535519125684%")
  },
  View_59_4449: {
    width: wp("22.15277777777778%"),
    minWidth: wp("22.15277777777778%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_4450: {
    width: wp("22.15277777777778%"),
    minWidth: wp("22.15277777777778%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_4451: {
    width: wp("22.15277777777778%"),
    minWidth: wp("22.15277777777778%"),
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
  ImageBackground_59_4452: {
    width: wp("0.9722222222222222%"),
    height: hp("2.3224043715846996%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.249999999999993%")
  },
  View_59_4453: {
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
  View_59_4454: {
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
  View_59_4455: {
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
  Text_59_4455: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4456: {
    width: wp("11.041666666666666%"),
    minWidth: wp("11.041666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.38888888888889%"),
    top: hp("35.79234972677596%")
  },
  View_59_4457: {
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
  View_59_4458: {
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
  View_59_4459: {
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
  ImageBackground_59_4460: {
    width: wp("0.9722222222222222%"),
    height: hp("2.3224043715846996%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.249999999999993%")
  },
  View_59_4461: {
    width: wp("7.291666666666667%"),
    minWidth: wp("7.291666666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.05555555555555%"),
    top: hp("0.9562841530054627%")
  },
  View_59_4462: {
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
  View_59_4463: {
    width: wp("1.1111111111111112%"),
    minWidth: wp("1.1111111111111112%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("0.8196721311475343%"),
    justifyContent: "center"
  },
  Text_59_4463: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4464: {
    width: wp("11.041666666666666%"),
    minWidth: wp("11.041666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.18055555555555%"),
    top: hp("57.513661202185794%")
  },
  View_59_4465: {
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
  View_59_4466: {
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
  View_59_4467: {
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
  ImageBackground_59_4468: {
    width: wp("0.9722222222222222%"),
    height: hp("2.3224043715846996%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.250000000000007%")
  },
  View_59_4469: {
    width: wp("7.291666666666667%"),
    minWidth: wp("7.291666666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("0.9562841530054627%")
  },
  View_59_4470: {
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
  View_59_4471: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.69444444444445%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_59_4471: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4472: {
    width: wp("26.38888888888889%"),
    minWidth: wp("26.38888888888889%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.861111111111114%"),
    top: hp("122.40437158469946%")
  },
  View_59_4473: {
    width: wp("26.38888888888889%"),
    minWidth: wp("26.38888888888889%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_4474: {
    width: wp("26.38888888888889%"),
    minWidth: wp("26.38888888888889%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_59_4475: {
    width: wp("26.38888888888889%"),
    minWidth: wp("26.38888888888889%"),
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
  ImageBackground_59_4476: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("2.5956284153005384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.02777777777777%")
  },
  ImageBackground_59_4477: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.249999999999993%")
  },
  View_59_4478: {
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
  View_59_4479: {
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
  View_59_4480: {
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
  Text_59_4480: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4481: {
    width: wp("11.805555555555555%"),
    minWidth: wp("11.805555555555555%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.972222222222214%"),
    top: hp("0.9562841530054556%")
  },
  View_59_4482: {
    width: wp("5.694444444444445%"),
    minWidth: wp("5.694444444444445%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(214, 220, 231, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_59_4483: {
    width: wp("3.8194444444444446%"),
    minWidth: wp("3.8194444444444446%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: hp("0.8196721311475557%"),
    justifyContent: "center"
  },
  Text_59_4483: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4484: {
    width: wp("5.694444444444445%"),
    minWidth: wp("5.694444444444445%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111114%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(214, 220, 231, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_59_4485: {
    width: wp("3.680555555555556%"),
    minWidth: wp("3.680555555555556%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.291666666666671%"),
    top: hp("0.8196721311475557%"),
    justifyContent: "center"
  },
  Text_59_4485: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4486: {
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
  View_59_4487: {
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
  View_59_4488: {
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
  View_59_4489: {
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
  ImageBackground_59_4490: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("2.5956284153005527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.958333333333329%")
  },
  ImageBackground_59_4491: {
    width: wp("1.1111111111111112%"),
    height: hp("2.3224043715846996%"),
    top: hp("1.639344262295097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2499999999999858%")
  },
  View_59_4492: {
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
  View_59_4493: {
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
  View_59_4494: {
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
  Text_59_4494: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4495: {
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
  View_59_4496: {
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
  View_59_4497: {
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
  View_59_4498: {
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
  ImageBackground_59_4499: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("1.775956284153004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_59_4500: {
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
  View_59_4501: {
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
  View_59_4502: {
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
  Text_59_4502: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4503: {
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
  View_59_4504: {
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
  View_59_4505: {
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
  View_59_4506: {
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
  ImageBackground_59_4507: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("2.5956284153005384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.972222222222214%")
  },
  ImageBackground_59_4508: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_59_4509: {
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
  View_59_4510: {
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
  View_59_4511: {
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
  Text_59_4511: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4512: {
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
  ImageBackground_59_4513: {
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
  ImageBackground_59_4516: {
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
  ImageBackground_59_4520: {
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
  ImageBackground_59_4523: {
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
  ImageBackground_59_4527: {
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
  ImageBackground_59_4531: {
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
  ImageBackground_59_4535: {
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
  ImageBackground_59_4539: {
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
  View_59_4543: {
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
  View_59_4544: {
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
  View_59_4545: {
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
  View_59_4546: {
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
  ImageBackground_59_4547: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("1.7759562841530112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.249999999999993%")
  },
  View_59_4548: {
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
  View_59_4549: {
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
  View_59_4550: {
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
  Text_59_4550: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_4551: {
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
  View_59_4552: {
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
  View_59_4553: {
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
  View_59_4554: {
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
  ImageBackground_59_4555: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("2.5956284153005527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.972222222222221%")
  },
  ImageBackground_59_4556: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_59_4557: {
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
  View_59_4558: {
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
  View_59_4559: {
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
  Text_59_4559: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_4560: {
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
  ImageBackground_59_4564: {
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
  ImageBackground_59_4568: {
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
  ImageBackground_59_4572: {
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
  ImageBackground_59_4576: {
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
  ImageBackground_59_4580: {
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
  ImageBackground_59_4584: {
    width: wp("0.8333336644702488%"),
    minWidth: wp("0.8333336644702488%"),
    height: hp("14.89071038251366%"),
    minHeight: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.13888888888889%"),
    top: hp("81.4207650273224%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
