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
      <View style={styles.View_11_247} />
      <View style={styles.View_11_254}>
        <Text style={styles.Text_11_254}>secondary nav</Text>
      </View>
      <View style={styles.View_11_255} />
      <View style={styles.View_11_256}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c572/f5f4/5404e07df69591d0a4593649fcdc545b"
          }}
          style={styles.ImageBackground_11_258}
        />
        <View style={styles.View_11_259}>
          <View style={styles.View_11_907}>
            <View style={styles.View_11_908} />
            <View style={styles.View_11_925}>
              <View style={styles.View_11_926}>
                <View style={styles.View_11_927} />
                <View style={styles.View_11_928} />
                <View style={styles.View_11_1024}>
                  <View style={styles.View_11_1025} />
                  <View style={styles.View_11_1026}>
                    <View style={styles.View_11_1027}>
                      <View style={styles.View_11_1028}>
                        <View style={styles.View_11_1029} />
                        <View style={styles.View_11_1030}>
                          <Text style={styles.Text_11_1030}>0</Text>
                        </View>
                        <View style={styles.View_11_1031}>
                          <Text style={styles.Text_11_1031}>0</Text>
                        </View>
                        <View style={styles.View_11_1032}>
                          <Text style={styles.Text_11_1032}>0</Text>
                        </View>
                        <View style={styles.View_11_1033}>
                          <Text style={styles.Text_11_1033}>0</Text>
                        </View>
                      </View>
                      <View style={styles.View_11_1034}>
                        <View style={styles.View_11_1035}>
                          <Text style={styles.Text_11_1035}>5</Text>
                        </View>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bce4/2097/8fe8971a3fb94fc82555803d1bae01e5"
                          }}
                          style={styles.ImageBackground_11_1036}
                        />
                      </View>
                      <View style={styles.View_11_1037}>
                        <View style={styles.View_11_1038}>
                          <Text style={styles.Text_11_1038}>5</Text>
                        </View>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46ff/853a/97a954905b6f48405d52276471b64bc1"
                          }}
                          style={styles.ImageBackground_11_1039}
                        />
                      </View>
                      <View style={styles.View_11_1040}>
                        <View style={styles.View_11_1041}>
                          <Text style={styles.Text_11_1041}>5</Text>
                        </View>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fc/5db2/b5e2e6c462d3e8c8b08883f000fa2fbb"
                          }}
                          style={styles.ImageBackground_11_1042}
                        />
                      </View>
                      <View style={styles.View_11_1043}>
                        <View style={styles.View_11_1044}>
                          <Text style={styles.Text_11_1044}>5</Text>
                        </View>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67ff/a62d/75038d2fec8afcd60e3353c35f506e05"
                          }}
                          style={styles.ImageBackground_11_1045}
                        />
                      </View>
                      <View style={styles.View_11_1046}>
                        <View style={styles.View_11_1047} />
                        <View style={styles.View_11_1048}>
                          <Text style={styles.Text_11_1048}>0</Text>
                        </View>
                        <View style={styles.View_11_1049}>
                          <Text style={styles.Text_11_1049}>0</Text>
                        </View>
                        <View style={styles.View_11_1050}>
                          <Text style={styles.Text_11_1050}>0</Text>
                        </View>
                        <View style={styles.View_11_1051}>
                          <Text style={styles.Text_11_1051}>0</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_11_1052}>
                      <View style={styles.View_11_1053}>
                        <View style={styles.View_11_1054}>
                          <Text style={styles.Text_11_1054}>Width</Text>
                        </View>
                        <View style={styles.View_11_1055}>
                          <View style={styles.View_11_1056} />
                          <View style={styles.View_11_1057} />
                          <View style={styles.View_11_1058}>
                            <Text style={styles.Text_11_1058}>px</Text>
                          </View>
                          <View style={styles.View_11_1059}>
                            <Text style={styles.Text_11_1059}>360</Text>
                          </View>
                        </View>
                        <View style={styles.View_11_1060}>
                          <Text style={styles.Text_11_1060}>Height</Text>
                        </View>
                        <View style={styles.View_11_1061}>
                          <View style={styles.View_11_1062} />
                          <View style={styles.View_11_1063} />
                          <View style={styles.View_11_1064}>
                            <Text style={styles.Text_11_1064}>px</Text>
                          </View>
                          <View style={styles.View_11_1065}>
                            <Text style={styles.Text_11_1065}>366</Text>
                          </View>
                        </View>
                        <View style={styles.View_11_1066} />
                        <View style={styles.View_11_1067} />
                        <View style={styles.View_11_1068} />
                        <View style={styles.View_11_1069} />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4989/089d/af7d6473c3fece682a9b522efae52fab"
                          }}
                          style={styles.ImageBackground_11_1070}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_11_930}>
                  <View style={styles.View_11_931}>
                    <Text style={styles.Text_11_931}>Align</Text>
                  </View>
                  <View style={styles.View_11_932} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2050/dbb1/fa55d2cbe1eeebc36c21fab3e9ae5b61"
                    }}
                    style={styles.ImageBackground_11_933}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca3b/1820/1d288cf5417a7efb3d0fda49e3152b02"
                    }}
                    style={styles.ImageBackground_11_934}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b80d/5d3d/0db6f696454e6b538025207a084408fc"
                    }}
                    style={styles.ImageBackground_11_935}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8faf/b108/4e9834ebf2aa862eaf1729fd28ed16b0"
                    }}
                    style={styles.ImageBackground_11_936}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0e1/7252/4d82adab41be7bc20451868fef459880"
                    }}
                    style={styles.ImageBackground_11_937}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2bd/0eb3/43da91598808fdfb82ac2d81b5490afd"
                    }}
                    style={styles.ImageBackground_11_938}
                  />
                </View>
                <View style={styles.View_11_939}>
                  <View style={styles.View_11_940}>
                    <Text style={styles.Text_11_940}>Overflow</Text>
                  </View>
                  <View style={styles.View_11_941} />
                  <View style={styles.View_11_942}>
                    <Text style={styles.Text_11_942}>Scroll</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaec/6e19/24b4f9eb676f3e9f633e34a449ece2bb"
                    }}
                    style={styles.ImageBackground_11_943}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65d0/435a/a0a2465cc4f5d29b73fc0efffd3203fb"
                  }}
                  style={styles.ImageBackground_11_944}
                />
                <View style={styles.View_11_945}>
                  <Text style={styles.Text_11_945}>Size and display</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_11_946}>
              <View style={styles.View_11_947} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61c6/c445/cef1c76a003c6db514149939f9ac5dd6"
                }}
                style={styles.ImageBackground_11_948}
              />
              <View style={styles.View_11_949}>
                <Text style={styles.Text_11_949}>Content</Text>
              </View>
              <View style={styles.View_11_950} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ba6/f052/75fd634493b9b1bc4da99d857984b226"
                }}
                style={styles.ImageBackground_11_951}
              />
              <View style={styles.View_11_952} />
              <View style={styles.View_11_953}>
                <Text style={styles.Text_11_953}>Display</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_11_261}>
            <View style={styles.View_11_262} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bad8/4826/43fab3b87a5d90979461018f4d7589de"
              }}
              style={styles.ImageBackground_11_263}
            />
            <View style={styles.View_11_264}>
              <Text style={styles.Text_11_264}>Overlay</Text>
            </View>
            <View style={styles.View_11_265}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efd6/7358/65c447421d2fd7295259151f40b9a533"
                }}
                style={styles.ImageBackground_11_266}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54f6/d4d7/234d8727e291487153b61569addc45f9"
                }}
                style={styles.ImageBackground_11_267}
              />
              <View style={styles.View_11_268}>
                <View style={styles.View_11_269} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0e8/1bb0/5d16c7a8c015f6d59f9453964e83e42d"
                  }}
                  style={styles.ImageBackground_11_270}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_11_271}>
            <View style={styles.View_11_272} />
            <View style={styles.View_11_273}>
              <View style={styles.View_11_274}>
                <Text style={styles.Text_11_274}>Color</Text>
              </View>
              <View style={styles.View_11_275} />
            </View>
            <View style={styles.View_11_276}>
              <View style={styles.View_11_277}>
                <Text style={styles.Text_11_277}>Overlay</Text>
              </View>
              <View style={styles.View_11_278} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaec/6e19/24b4f9eb676f3e9f633e34a449ece2bb"
                }}
                style={styles.ImageBackground_11_279}
              />
              <View style={styles.View_11_280}>
                <Text style={styles.Text_11_280}>Yes</Text>
              </View>
            </View>
            <View style={styles.View_11_281}>
              <View style={styles.View_11_282} />
              <View style={styles.View_11_283}>
                <Text style={styles.Text_11_283}>Connection</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27ea/8383/32aa632cc4fecc7b96f126a0439cd79d"
                }}
                style={styles.ImageBackground_11_284}
              />
              <View style={styles.View_11_285}>
                <Text style={styles.Text_11_285}>Launch.modal.button</Text>
              </View>
            </View>
            <View style={styles.View_11_286}>
              <View style={styles.View_11_287}>
                <Text style={styles.Text_11_287}>Display as</Text>
              </View>
              <View style={styles.View_11_288} />
              <View style={styles.View_11_289}>
                <Text style={styles.Text_11_289}>Modal window</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaec/6e19/24b4f9eb676f3e9f633e34a449ece2bb"
                }}
                style={styles.ImageBackground_11_290}
              />
            </View>
            <View style={styles.View_11_291}>
              <View style={styles.View_11_292}>
                <Text style={styles.Text_11_292}>Animation</Text>
              </View>
              <View style={styles.View_11_293} />
              <View style={styles.View_11_294}>
                <Text style={styles.Text_11_294}>Fade in</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaec/6e19/24b4f9eb676f3e9f633e34a449ece2bb"
                }}
                style={styles.ImageBackground_11_295}
              />
            </View>
            <View style={styles.View_11_296}>
              <View style={styles.View_11_297}>
                <Text style={styles.Text_11_297}>Appear from</Text>
              </View>
              <View style={styles.View_11_298} />
              <View style={styles.View_11_299}>
                <Text style={styles.Text_11_299}>Top left</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaec/6e19/24b4f9eb676f3e9f633e34a449ece2bb"
                }}
                style={styles.ImageBackground_11_300}
              />
            </View>
            <View style={styles.View_11_301}>
              <View style={styles.View_11_302}>
                <Text style={styles.Text_11_302}>Dismiss</Text>
              </View>
              <View style={styles.View_11_303} />
              <View style={styles.View_11_304}>
                <Text style={styles.Text_11_304}>Tap outside</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaec/6e19/24b4f9eb676f3e9f633e34a449ece2bb"
                }}
                style={styles.ImageBackground_11_305}
              />
            </View>
            <View style={styles.View_11_306}>
              <View style={styles.View_11_307}>
                <Text style={styles.Text_11_307}>Position</Text>
              </View>
              <View style={styles.View_11_308} />
              <View style={styles.View_11_309}>
                <View style={styles.View_11_310}>
                  <Text style={styles.Text_11_310}>Left</Text>
                </View>
              </View>
              <View style={styles.View_11_311}>
                <View style={styles.View_11_312}>
                  <Text style={styles.Text_11_312}>Absolute</Text>
                </View>
              </View>
              <View style={styles.View_11_313}>
                <View style={styles.View_11_314}>
                  <Text style={styles.Text_11_314}>Center</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a71/56ff/daafdc78ab97310f618793a374db30e4"
                }}
                style={styles.ImageBackground_11_315}
              />
            </View>
          </View>
          <View style={styles.View_11_316}>
            <View style={styles.View_11_317} />
            <View style={styles.View_11_318}>
              <View style={styles.View_11_319} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
                }}
                style={styles.ImageBackground_11_320}
              />
              <View style={styles.View_11_321}>
                <Text style={styles.Text_11_321}>Font settings</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_11_322}>
            <View style={styles.View_11_323}>
              <View style={styles.View_11_324} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
                }}
                style={styles.ImageBackground_11_325}
              />
              <View style={styles.View_11_326}>
                <Text style={styles.Text_11_326}>Border</Text>
              </View>
            </View>
            <View style={styles.View_11_327}>
              <View style={styles.View_11_328} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
                }}
                style={styles.ImageBackground_11_329}
              />
              <View style={styles.View_11_330}>
                <Text style={styles.Text_11_330}>Styles</Text>
              </View>
            </View>
            <View style={styles.View_11_331}>
              <View style={styles.View_11_332}>
                <Text style={styles.Text_11_332}>
                  Share this module in its current state with all Crowdbotics
                  users
                </Text>
              </View>
              <View style={styles.View_11_333}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc91/c1da/d87c484489dc83b7e8216335b130a21f"
                  }}
                  style={styles.ImageBackground_11_334}
                />
                <View style={styles.View_11_335}>
                  <View style={styles.View_11_336}>
                    <View style={styles.View_11_337}>
                      <Text style={styles.Text_11_337}>Share with crowd</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_11_903}>
            <View style={styles.View_11_904} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4017/21d4/92811b55dfc3399a398feab0d0f822d7"
              }}
              style={styles.ImageBackground_11_905}
            />
            <View style={styles.View_11_906}>
              <Text style={styles.Text_11_906}>Modal settings</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db90/9766/50632e225720a54476d529e8a421cbc9"
            }}
            style={styles.ImageBackground_11_339}
          />
        </View>
        <View style={styles.View_11_340}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b77/c205/d7e87c71b5e7da5b31fd3b03183a02e0"
            }}
            style={styles.ImageBackground_11_341}
          />
          <View style={styles.View_11_342}>
            <View style={styles.View_11_343}>
              <View style={styles.View_11_344}>
                <Text style={styles.Text_11_344}>Module properties</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_11_345}>
          <View style={styles.View_11_347} />
          <View style={styles.View_11_496}>
            <View style={styles.View_11_497} />
            <View style={styles.View_11_1131}>
              <View style={styles.View_11_1132}>
                <View style={styles.View_11_1143}>
                  <View style={styles.View_11_1133} />
                  <View style={styles.View_11_1136}>
                    <Text style={styles.Text_11_1136}>Validate Password</Text>
                  </View>
                </View>
                <View style={styles.View_11_1142}>
                  <View style={styles.View_11_1137} />
                  <View style={styles.View_11_1138}>
                    <Text style={styles.Text_11_1138}>Password</Text>
                  </View>
                </View>
                <View style={styles.View_11_1141}>
                  <View style={styles.View_11_1139} />
                  <View style={styles.View_11_1140}>
                    <Text style={styles.Text_11_1140}>Username</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_11_498}>
              <Text style={styles.Text_11_498}>Sign Up</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_11_353}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3292/0d89/1f9fa84df59bd9de0ca83419f634c292"
            }}
            style={styles.ImageBackground_11_354}
          />
          <View style={styles.View_11_355}>
            <Text style={styles.Text_11_355}>Page name</Text>
          </View>
          <View style={styles.View_11_356}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8e3/a650/5c586e9ce839dc2623ee27d433aad132"
              }}
              style={styles.ImageBackground_11_357}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea3/115f/bd7efe815fceeeb8e26cc53554552b0b"
              }}
              style={styles.ImageBackground_11_358}
            />
          </View>
          <View style={styles.View_11_359}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea3/115f/bd7efe815fceeeb8e26cc53554552b0b"
              }}
              style={styles.ImageBackground_11_360}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cd5/5d65/13a41a7408223ef692ddf55ab2276a90"
              }}
              style={styles.ImageBackground_11_361}
            />
          </View>
          <View style={styles.View_11_362}>
            <View style={styles.View_11_363}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65d0/435a/a0a2465cc4f5d29b73fc0efffd3203fb"
                }}
                style={styles.ImageBackground_11_364}
              />
              <View style={styles.View_11_365}>
                <Text style={styles.Text_11_365}>
                  Iphone 11 Pro Max 414 px 896 px
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06e5/e82c/fa1df0e483f28bc7640260f791b0debf"
              }}
              style={styles.ImageBackground_11_366}
            />
          </View>
          <View style={styles.View_11_367}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e63/c0b9/e1b8c7c6e351eca171c4451818adea5b"
              }}
              style={styles.ImageBackground_11_368}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e63/c0b9/e1b8c7c6e351eca171c4451818adea5b"
              }}
              style={styles.ImageBackground_11_369}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edc1/5e86/99386c8b0721d976d3bc2691e8326f25"
              }}
              style={styles.ImageBackground_11_370}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edc1/5e86/99386c8b0721d976d3bc2691e8326f25"
              }}
              style={styles.ImageBackground_11_371}
            />
            <View style={styles.View_11_372} />
            <View style={styles.View_11_373} />
            <View style={styles.View_11_374} />
            <View style={styles.View_11_375} />
          </View>
          <View style={styles.View_11_376}>
            <View style={styles.View_11_377} />
            <View style={styles.View_11_378} />
            <View style={styles.View_11_379}>
              <Text style={styles.Text_11_379}>Zoom 100%</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_11_380}>
        <View style={styles.View_11_381}>
          <View style={styles.View_11_382} />
          <View style={styles.View_11_383}>
            <Text style={styles.Text_11_383}>SAVE</Text>
          </View>
        </View>
        <View style={styles.View_11_384}>
          <View style={styles.View_11_385} />
          <View style={styles.View_11_386}>
            <Text style={styles.Text_11_386}>Cancel</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_11_387}>
        <View style={styles.View_11_388}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e79f/47bf/a95906afb71441a48eb2b03fbf3fb7dd"
            }}
            style={styles.ImageBackground_11_389}
          />
          <View style={styles.View_11_390}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cc6/24b9/8139ca9e37f930d0ec3fa677e8beca39"
              }}
              style={styles.ImageBackground_11_391}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_11_793}>
        <View style={styles.View_11_794}>
          <View style={styles.View_11_795} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
            }}
            style={styles.ImageBackground_11_796}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa90/733c/9d86836c4af1466060dcdc9d20a978b6"
            }}
            style={styles.ImageBackground_11_797}
          />
          <View style={styles.View_11_798}>
            <Text style={styles.Text_11_798}>Element tree</Text>
          </View>
        </View>
        <View style={styles.View_11_799}>
          <View style={styles.View_11_800} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4017/21d4/92811b55dfc3399a398feab0d0f822d7"
            }}
            style={styles.ImageBackground_11_801}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a53f/7b45/d87373a146c4faa5715b883da1b62037"
            }}
            style={styles.ImageBackground_11_802}
          />
          <View style={styles.View_11_803}>
            <Text style={styles.Text_11_803}>Elements</Text>
          </View>
        </View>
        <View style={styles.View_11_804}>
          <View style={styles.View_11_805}>
            <View style={styles.View_11_806} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/ce61/076a5fe63e6abc65488e3a62d872c9ae"
              }}
              style={styles.ImageBackground_11_807}
            />
            <View style={styles.View_11_808}>
              <Text style={styles.Text_11_808}>Columns</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abe6/8c53/74ba2e562fea33eeae172a26d0145ebe"
              }}
              style={styles.ImageBackground_11_809}
            />
          </View>
          <View style={styles.View_11_810}>
            <View style={styles.View_11_811} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/ce61/076a5fe63e6abc65488e3a62d872c9ae"
              }}
              style={styles.ImageBackground_11_812}
            />
            <View style={styles.View_11_813}>
              <Text style={styles.Text_11_813}>Flex</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec1f/744a/0139a8a970a5f4d7c0de6e080b4b8129"
              }}
              style={styles.ImageBackground_11_814}
            />
          </View>
        </View>
        <View style={styles.View_11_815}>
          <View style={styles.View_11_816}>
            <View style={styles.View_11_817} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/ce61/076a5fe63e6abc65488e3a62d872c9ae"
              }}
              style={styles.ImageBackground_11_818}
            />
            <View style={styles.View_11_819}>
              <Text style={styles.Text_11_819}>Button</Text>
            </View>
            <View style={styles.View_11_820} />
          </View>
          <View style={styles.View_11_821}>
            <View style={styles.View_11_822} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/ce61/076a5fe63e6abc65488e3a62d872c9ae"
              }}
              style={styles.ImageBackground_11_823}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e91/c0b1/6cda5a3a9fb2cb02e6683afa3d786de0"
              }}
              style={styles.ImageBackground_11_824}
            />
            <View style={styles.View_11_825}>
              <Text style={styles.Text_11_825}>Rows</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_11_826}>
          <View style={styles.View_11_827}>
            <View style={styles.View_11_828} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/ce61/076a5fe63e6abc65488e3a62d872c9ae"
              }}
              style={styles.ImageBackground_11_829}
            />
            <View style={styles.View_11_830}>
              <Text style={styles.Text_11_830}>Text input</Text>
            </View>
            <View style={styles.View_11_831}>
              <View style={styles.View_11_832} />
              <View style={styles.View_11_833}>
                <Text style={styles.Text_11_833}>abc</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_11_834}>
            <View style={styles.View_11_835} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/ce61/076a5fe63e6abc65488e3a62d872c9ae"
              }}
              style={styles.ImageBackground_11_836}
            />
            <View style={styles.View_11_837}>
              <Text style={styles.Text_11_837}>Text</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f9f/36e3/db0695300bb19e230859b137dc7c7af4"
              }}
              style={styles.ImageBackground_11_838}
            />
          </View>
        </View>
        <View style={styles.View_11_839}>
          <View style={styles.View_11_840}>
            <View style={styles.View_11_841} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/ce61/076a5fe63e6abc65488e3a62d872c9ae"
              }}
              style={styles.ImageBackground_11_842}
            />
            <View style={styles.View_11_843}>
              <Text style={styles.Text_11_843}>Date input</Text>
            </View>
            <View style={styles.View_11_844}>
              <View style={styles.View_11_845} />
              <View style={styles.View_11_846}>
                <Text style={styles.Text_11_846}>02.13</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_11_847}>
            <View style={styles.View_11_848} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/ce61/076a5fe63e6abc65488e3a62d872c9ae"
              }}
              style={styles.ImageBackground_11_849}
            />
            <View style={styles.View_11_850}>
              <Text style={styles.Text_11_850}>Number input</Text>
            </View>
            <View style={styles.View_11_851}>
              <View style={styles.View_11_852} />
              <View style={styles.View_11_853}>
                <Text style={styles.Text_11_853}>123</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_11_854}>
          <View style={styles.View_11_855}>
            <View style={styles.View_11_856} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/ce61/076a5fe63e6abc65488e3a62d872c9ae"
              }}
              style={styles.ImageBackground_11_857}
            />
            <View style={styles.View_11_858}>
              <Text style={styles.Text_11_858}>Switch</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d25b/fbfe/cbc5dc3a07751d162e49a1d047d0cc69"
              }}
              style={styles.ImageBackground_11_859}
            />
          </View>
          <View style={styles.View_11_860}>
            <View style={styles.View_11_861} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/ce61/076a5fe63e6abc65488e3a62d872c9ae"
              }}
              style={styles.ImageBackground_11_862}
            />
            <View style={styles.View_11_863}>
              <Text style={styles.Text_11_863}>Text Area</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8a9/458c/6c26740a3329e7b2a27a952396b64459"
              }}
              style={styles.ImageBackground_11_864}
            />
          </View>
        </View>
        <View style={styles.View_11_865}>
          <View style={styles.View_11_866}>
            <View style={styles.View_11_867} />
            <View style={styles.View_11_868}>
              <Text style={styles.Text_11_868}>Drop-down</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/882e/9a78/aecc7079302175edb334efa482809013"
              }}
              style={styles.ImageBackground_11_869}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/ce61/076a5fe63e6abc65488e3a62d872c9ae"
            }}
            style={styles.ImageBackground_11_870}
          />
          <View style={styles.View_11_871}>
            <View style={styles.View_11_872} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/ce61/076a5fe63e6abc65488e3a62d872c9ae"
              }}
              style={styles.ImageBackground_11_873}
            />
            <View style={styles.View_11_874}>
              <Text style={styles.Text_11_874}>Overlay</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b62/27d2/53ab738af78e1d5bbba036e0a35201c1"
              }}
              style={styles.ImageBackground_11_875}
            />
          </View>
        </View>
        <View style={styles.View_11_876}>
          <View style={styles.View_11_877}>
            <View style={styles.View_11_878} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/ce61/076a5fe63e6abc65488e3a62d872c9ae"
              }}
              style={styles.ImageBackground_11_879}
            />
            <View style={styles.View_11_880}>
              <Text style={styles.Text_11_880}>Image</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fdb/63dd/acd856d23b9541cd59084f5a4f1529df"
              }}
              style={styles.ImageBackground_11_881}
            />
          </View>
          <View style={styles.View_11_882}>
            <View style={styles.View_11_883} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/ce61/076a5fe63e6abc65488e3a62d872c9ae"
              }}
              style={styles.ImageBackground_11_884}
            />
            <View style={styles.View_11_885}>
              <Text style={styles.Text_11_885}>Group</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24b2/3f2f/b4668af0881ac20cc17e8f0f353115c3"
              }}
              style={styles.ImageBackground_11_886}
            />
          </View>
        </View>
        <View style={styles.View_11_887}>
          <View style={styles.View_11_888} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
            }}
            style={styles.ImageBackground_11_889}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5043/ca3c/d9ff902e8cc20303bdb19cb5b5a40939"
            }}
            style={styles.ImageBackground_11_890}
          />
          <View style={styles.View_11_891}>
            <Text style={styles.Text_11_891}>Resources</Text>
          </View>
        </View>
        <View style={styles.View_11_892}>
          <View style={styles.View_11_893}>
            <View style={styles.View_11_894} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
              }}
              style={styles.ImageBackground_11_895}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aecd/d9f5/5af75da3d00b27a1cf265b7c2865fe4c"
              }}
              style={styles.ImageBackground_11_896}
            />
            <View style={styles.View_11_897}>
              <Text style={styles.Text_11_897}>Styles</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_11_898}>
          <View style={styles.View_11_899} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d54a/969b/693e7879042e4ea631cd8feb999f07b4"
            }}
            style={styles.ImageBackground_11_900}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a79e/4203/04f1819799778ed5425024f4526f9d50"
            }}
            style={styles.ImageBackground_11_901}
          />
          <View style={styles.View_11_902}>
            <Text style={styles.Text_11_902}>Groups</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_11_396}>
        <View style={styles.View_11_397}>
          <View style={styles.View_11_398} />
          <View style={styles.View_11_399}>
            <Text style={styles.Text_11_399}>Connectors</Text>
          </View>
        </View>
        <View style={styles.View_11_1474}>
          <View style={styles.View_11_1475} />
          <View style={styles.View_11_1477}>
            <Text style={styles.Text_11_1477}>Functions</Text>
          </View>
        </View>
        <View style={styles.View_11_400}>
          <View style={styles.View_11_401} />
          <View style={styles.View_11_402} />
          <View style={styles.View_11_403}>
            <Text style={styles.Text_11_403}>Design</Text>
          </View>
        </View>
        <View style={styles.View_11_404}>
          <View style={styles.View_11_405} />
          <View style={styles.View_11_406}>
            <Text style={styles.Text_11_406}>Functions</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_11_791}>
        <View style={styles.View_11_792} />
      </View>
      <View style={styles.View_11_781}>
        <View style={styles.View_11_782} />
        <View style={styles.View_11_783} />
        <View style={styles.View_11_784} />
        <View style={styles.View_11_785} />
        <View style={styles.View_11_786} />
        <View style={styles.View_11_787} />
        <View style={styles.View_11_788} />
        <View style={styles.View_11_789} />
        <View style={styles.View_11_790}>
          <Text style={styles.Text_11_790}>main nav</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f729/5771/eb8c48bfe5857d671b5668d8df3cf1d3"
        }}
        style={styles.ImageBackground_11_409}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("147.54098360655738%") },
  View_11_247: {
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
  View_11_254: {
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
  Text_11_254: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_11_255: {
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
  View_11_256: {
    width: wp("96.66761610243056%"),
    minWidth: wp("96.66761610243056%"),
    height: hp("143.85245901639345%"),
    minHeight: hp("143.85245901639345%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("15.163934426229508%")
  },
  ImageBackground_11_258: {
    width: wp("55.486111111111114%"),
    minWidth: wp("55.486111111111114%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.194444444444446%"),
    top: hp("5.601092896174864%")
  },
  View_11_259: {
    width: wp("22.84817165798611%"),
    minWidth: wp("22.84817165798611%"),
    height: hp("138.25136612021856%"),
    minHeight: hp("138.25136612021856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.81944444444446%"),
    top: hp("5.601092896174864%")
  },
  View_11_907: {
    width: wp("22.84817165798611%"),
    minWidth: wp("22.84817165798611%"),
    height: hp("88.79781420765028%"),
    minHeight: hp("88.79781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_908: {
    width: wp("22.84722222222222%"),
    height: hp("132.37704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_11_925: {
    width: wp("22.84722222222222%"),
    height: hp("40.98360655737705%"),
    top: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0009494357638857309%")
  },
  View_11_926: {
    width: wp("22.84722222222222%"),
    height: hp("40.98360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_927: {
    width: wp("22.84722222222222%"),
    height: hp("40.98360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_11_928: {
    width: wp("22.84722222222222%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_11_1024: {
    width: wp("22.84722222222222%"),
    height: hp("18.989071038251364%"),
    top: hp("6.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_1025: {
    width: wp("22.84722222222222%"),
    height: hp("18.989071038251364%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_11_1026: {
    width: wp("20.208333333333332%"),
    height: hp("13.524590163934427%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444429%")
  },
  View_11_1027: {
    width: wp("9.791666666666666%"),
    height: hp("13.524590163934427%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.416666666666671%")
  },
  View_11_1028: {
    width: wp("9.791666666666666%"),
    height: hp("13.524590163934427%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_1029: {
    width: wp("9.791666666666666%"),
    height: hp("13.524590163934427%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(204, 211, 225, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_11_1030: {
    width: wp("0.4861111111111111%"),
    top: hp("11.20218579234973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.6527777777777715%"),
    justifyContent: "center"
  },
  Text_11_1030: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_1031: {
    width: wp("0.4861111111111111%"),
    top: hp("6.147540983606561%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9027777777777715%"),
    justifyContent: "center"
  },
  Text_11_1031: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_1032: {
    width: wp("0.4861111111111111%"),
    top: hp("1.092896174863391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.6527777777777715%"),
    justifyContent: "center"
  },
  Text_11_1032: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_1033: {
    width: wp("0.4861111111111111%"),
    top: hp("6.147540983606561%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.40309990776909%"),
    justifyContent: "center"
  },
  Text_11_1033: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_1034: {
    width: wp("1.6666671964857314%"),
    height: hp("3.278688524590164%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4166666666666572%")
  },
  View_11_1035: {
    width: wp("0.4861111111111111%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6250508626302036%"),
    justifyContent: "center"
  },
  Text_11_1035: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_1036: {
    width: wp("1.6666671964857314%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_1037: {
    width: wp("1.6666667991214328%"),
    height: hp("3.2786898274239293%"),
    top: hp("9.562841530054648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4166666666666572%")
  },
  View_11_1038: {
    width: wp("0.4861111111111111%"),
    top: hp("0.8196731734145573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6250508626302036%"),
    justifyContent: "center"
  },
  Text_11_1038: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_1039: {
    width: wp("1.6666667991214328%"),
    height: hp("3.2786898274239293%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_1040: {
    width: wp("1.666667461395264%"),
    height: hp("3.278688785156917%"),
    top: hp("9.562841530054648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.778099907769089%")
  },
  View_11_1041: {
    width: wp("0.4861111111111111%"),
    top: hp("0.888044847165304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5902777777777715%"),
    justifyContent: "center"
  },
  Text_11_1041: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_1042: {
    width: wp("1.666667461395264%"),
    height: hp("3.278688785156917%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_1043: {
    width: wp("1.6666666666666667%"),
    height: hp("3.2786898274239293%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.778099907769089%")
  },
  View_11_1044: {
    width: wp("0.4861111111111111%"),
    top: hp("0.8880448471652969%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5902777777777715%"),
    justifyContent: "center"
  },
  Text_11_1044: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_1045: {
    width: wp("1.6666666666666667%"),
    height: hp("3.2786898274239293%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_1046: {
    width: wp("5.138888888888888%"),
    height: hp("7.377049180327869%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111%")
  },
  View_11_1047: {
    width: wp("5.138888888888888%"),
    height: hp("7.377049180327869%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(204, 211, 225, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_11_1048: {
    width: wp("0.4861111111111111%"),
    top: hp("1.3661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666714%"),
    justifyContent: "center"
  },
  Text_11_1048: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_1049: {
    width: wp("0.4861111111111111%"),
    top: hp("4.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666714%"),
    justifyContent: "center"
  },
  Text_11_1049: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_1050: {
    width: wp("0.4861111111111111%"),
    top: hp("2.868852459016395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444571%"),
    justifyContent: "center"
  },
  Text_11_1050: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_1051: {
    width: wp("0.4861111111111111%"),
    top: hp("2.868852459016395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.958333333333343%"),
    justifyContent: "center"
  },
  Text_11_1051: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_1052: {
    width: wp("9.930555555555555%"),
    height: hp("9.562841530054644%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_1053: {
    width: wp("9.930555555555555%"),
    height: hp("9.562841530054644%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_1054: {
    width: wp("2.5%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_11_1054: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_1055: {
    width: wp("5.208333333333334%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%")
  },
  View_11_1056: {
    width: wp("5.208333333333334%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_11_1057: {
    width: wp("1.875%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 0
  },
  View_11_1058: {
    width: wp("1.1805555555555556%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.958333333333343%"),
    justifyContent: "center"
  },
  Text_11_1058: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 7,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_1059: {
    width: wp("3.2638888888888893%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    justifyContent: "center"
  },
  Text_11_1059: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_1060: {
    width: wp("2.7777777777777777%"),
    top: hp("6.284153005464475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_11_1060: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_1061: {
    width: wp("5.208333333333334%"),
    height: hp("4.098360655737705%"),
    top: hp("5.4644808743169335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%")
  },
  View_11_1062: {
    width: wp("5.208333333333334%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_11_1063: {
    width: wp("1.875%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333286%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 0
  },
  View_11_1064: {
    width: wp("1.1805555555555556%"),
    top: hp("1.2295081967213193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.958333333333343%"),
    justifyContent: "center"
  },
  Text_11_1064: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 7,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_1065: {
    width: wp("3.2638888888888893%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    justifyContent: "center"
  },
  Text_11_1065: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_1066: {
    width: wp("0.06944444444444445%"),
    height: hp("1.366120218579235%"),
    top: hp("6.284153005464475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.44427490234375%"),
    backgroundColor: "rgba(204, 211, 225, 1)"
  },
  View_11_1067: {
    width: wp("0.625%"),
    height: hp("0.1366120218579235%"),
    top: hp("7.513661202185794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.888888888888886%"),
    backgroundColor: "rgba(204, 211, 225, 1)"
  },
  View_11_1068: {
    width: wp("0.625%"),
    height: hp("0.1366120218579235%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.888888888888886%"),
    backgroundColor: "rgba(204, 211, 225, 1)"
  },
  View_11_1069: {
    width: wp("0.06944447755813599%"),
    height: hp("1.366120218579235%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.513888888888886%"),
    backgroundColor: "rgba(204, 211, 225, 1)"
  },
  ImageBackground_11_1070: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.097222222222214%")
  },
  View_11_930: {
    width: wp("20.13888888888889%"),
    height: hp("4.098360655737705%"),
    top: hp("28.688524590163944%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%")
  },
  View_11_931: {
    width: wp("6.25%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_11_931: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_932: {
    width: wp("14.444444444444443%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.694444444444443%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_11_933: {
    width: wp("1.1805555555555556%"),
    height: hp("2.3224043715846996%"),
    top: hp("0.9562841530054556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888886%")
  },
  ImageBackground_11_934: {
    width: wp("1.1805555555555556%"),
    height: hp("2.3224043715846996%"),
    top: hp("0.9562841530054556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.819444444444443%")
  },
  ImageBackground_11_935: {
    width: wp("1.1111111111111112%"),
    height: hp("2.3224043715846996%"),
    top: hp("0.9562841530054556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.972222222222214%")
  },
  ImageBackground_11_936: {
    width: wp("1.1805555555555556%"),
    height: hp("1.912568306010929%"),
    top: hp("1.0928961748633697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.33333333333333%")
  },
  ImageBackground_11_937: {
    width: wp("1.1111111111111112%"),
    height: hp("2.3224043715846996%"),
    top: hp("0.9562841530054556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.25%")
  },
  ImageBackground_11_938: {
    width: wp("1.1111111111111112%"),
    height: hp("2.3224043715846996%"),
    top: hp("0.9562841530054556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.611111111111114%")
  },
  View_11_939: {
    width: wp("20.13888888888889%"),
    height: hp("4.098360655737705%"),
    top: hp("34.15300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%")
  },
  View_11_940: {
    width: wp("6.25%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_11_940: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_941: {
    width: wp("14.444444444444443%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.694444444444443%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_11_942: {
    width: wp("4.513888888888888%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.458333333333329%"),
    justifyContent: "center"
  },
  Text_11_942: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_943: {
    width: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    top: hp("1.775956284152997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.888888888888886%")
  },
  ImageBackground_11_944: {
    width: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    top: hp("3.1420765027322375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.972222222222214%")
  },
  View_11_945: {
    width: wp("15.76388888888889%"),
    top: hp("2.5956284153005456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444429%"),
    justifyContent: "center"
  },
  Text_11_945: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_946: {
    width: wp("22.84722222222222%"),
    height: hp("5.601093938441876%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_947: {
    width: wp("11.319444444444445%"),
    height: hp("5.464481916583953%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_11_948: {
    width: wp("11.38888888888889%"),
    height: hp("0.000001958652503331716%"),
    top: hp("5.601092896174862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_949: {
    width: wp("6.388888888888888%"),
    top: hp("0.9562841530054662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.430555555555543%"),
    justifyContent: "center"
  },
  Text_11_949: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_950: {
    width: wp("11.458333333333332%"),
    height: hp("5.601093938441876%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.388888888888872%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_11_951: {
    width: wp("1.2445604448253613e-7%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.319444444444429%")
  },
  View_11_952: {
    width: wp("11.458333333333332%"),
    height: hp("0.2732248905577946%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.388888888888872%"),
    backgroundColor: "rgba(119, 122, 243, 1)"
  },
  View_11_953: {
    width: wp("8.541666666666666%"),
    top: hp("0.9562841530054662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.847222222222214%"),
    justifyContent: "center"
  },
  Text_11_953: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_261: {
    width: wp("22.84722222222222%"),
    minWidth: wp("22.84722222222222%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_11_262: {
    width: wp("22.84722222222222%"),
    minWidth: wp("22.84722222222222%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_11_263: {
    width: wp("1.0416666666666665%"),
    height: hp("1.912568306010929%"),
    top: hp("3.5519125683060118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%")
  },
  View_11_264: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111%"),
    top: hp("3.1420765027322375%"),
    justifyContent: "center"
  },
  Text_11_264: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_265: {
    width: wp("4.722222222222222%"),
    minWidth: wp("4.722222222222222%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.7361111111111%"),
    top: hp("3.1420765027322375%")
  },
  ImageBackground_11_266: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8055555555555571%")
  },
  ImageBackground_11_267: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_268: {
    width: wp("1.1111111111111112%"),
    minWidth: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111143%"),
    top: hp("0%")
  },
  View_11_269: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2083333333333286%"),
    top: hp("0.4098360655737743%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_11_270: {
    width: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_271: {
    width: wp("22.84722222222222%"),
    minWidth: wp("22.84722222222222%"),
    height: hp("42.349726775956285%"),
    minHeight: hp("42.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("62.56830601092897%")
  },
  View_11_272: {
    width: wp("22.84722222222222%"),
    minWidth: wp("22.84722222222222%"),
    height: hp("42.349726775956285%"),
    minHeight: hp("42.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_11_273: {
    width: wp("5.416666666666667%"),
    minWidth: wp("5.416666666666667%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.1111111111111%"),
    top: hp("36.20218579234971%")
  },
  View_11_274: {
    width: wp("2.569444444444444%"),
    minWidth: wp("2.569444444444444%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "center"
  },
  Text_11_274: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_275: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9583333333333286%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(214, 220, 231, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_11_276: {
    width: wp("10.625%"),
    minWidth: wp("10.625%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444287%"),
    top: hp("35.51912568306011%")
  },
  View_11_277: {
    width: wp("3.2638888888888893%"),
    minWidth: wp("3.2638888888888893%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475272%"),
    justifyContent: "center"
  },
  Text_11_277: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_278: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.7638888888889%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_11_279: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.5138888888889%"),
    top: hp("1.7759562841529828%")
  },
  View_11_280: {
    width: wp("1.875%"),
    minWidth: wp("1.875%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.5972222222222285%"),
    top: hp("0.8196721311475272%"),
    justifyContent: "center"
  },
  Text_11_280: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_281: {
    width: wp("20.208333333333332%"),
    minWidth: wp("20.208333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444287%"),
    top: hp("8.1967213114754%")
  },
  View_11_282: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.7638888888889%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_11_283: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_11_283: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_284: {
    width: wp("1.1111111111111112%"),
    height: hp("1.912568306010929%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.47222222222223%")
  },
  View_11_285: {
    width: wp("9.097222222222221%"),
    minWidth: wp("9.097222222222221%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.527777777777786%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_11_285: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_286: {
    width: wp("20.208333333333332%"),
    minWidth: wp("20.208333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444287%"),
    top: hp("13.661202185792334%")
  },
  View_11_287: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_11_287: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_288: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.7638888888889%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_11_289: {
    width: wp("6.180555555555555%"),
    minWidth: wp("6.180555555555555%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.527777777777786%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_11_289: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_290: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.958333333333343%"),
    top: hp("1.7759562841530112%")
  },
  View_11_291: {
    width: wp("20.208333333333332%"),
    minWidth: wp("20.208333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444287%"),
    top: hp("19.125683060109267%")
  },
  View_11_292: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475557%"),
    justifyContent: "center"
  },
  Text_11_292: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_293: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.7638888888889%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_11_294: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.527777777777786%"),
    top: hp("0.8196721311475557%"),
    justifyContent: "center"
  },
  Text_11_294: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_295: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.958333333333343%"),
    top: hp("1.7759562841530112%")
  },
  View_11_296: {
    width: wp("20.208333333333332%"),
    minWidth: wp("20.208333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444287%"),
    top: hp("24.590163934426215%")
  },
  View_11_297: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475557%"),
    justifyContent: "center"
  },
  Text_11_297: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_298: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.7638888888889%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_11_299: {
    width: wp("3.194444444444444%"),
    minWidth: wp("3.194444444444444%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.527777777777786%"),
    top: hp("0.8196721311475557%"),
    justifyContent: "center"
  },
  Text_11_299: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_300: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.958333333333343%"),
    top: hp("1.7759562841530112%")
  },
  View_11_301: {
    width: wp("20.208333333333332%"),
    minWidth: wp("20.208333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444287%"),
    top: hp("30.054644808743163%")
  },
  View_11_302: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475272%"),
    justifyContent: "center"
  },
  Text_11_302: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_303: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.7638888888889%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_11_304: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.527777777777786%"),
    top: hp("0.8196721311475272%"),
    justifyContent: "center"
  },
  Text_11_304: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_305: {
    width: wp("0.5317186978128221%"),
    minWidth: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    minHeight: hp("0.6596386758356146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.958333333333343%"),
    top: hp("1.775956284152997%")
  },
  View_11_306: {
    width: wp("20.208333333333332%"),
    minWidth: wp("20.208333333333332%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444287%"),
    top: hp("2.7322404371584526%")
  },
  View_11_307: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_11_307: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_308: {
    width: wp("14.444444444444443%"),
    minWidth: wp("14.444444444444443%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.7638888888889%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(119, 122, 243, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_11_309: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.069444444444443%"),
    top: hp("0.546448087431699%")
  },
  View_11_310: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_11_310: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_311: {
    width: wp("3.888888888888889%"),
    minWidth: wp("3.888888888888889%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("0%")
  },
  View_11_312: {
    width: wp("3.888888888888889%"),
    minWidth: wp("3.888888888888889%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_11_312: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_313: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.958333333333343%"),
    top: hp("0.546448087431699%")
  },
  View_11_314: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_11_314: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_315: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.680555555555557%")
  },
  View_11_316: {
    width: wp("22.84722222222222%"),
    height: hp("6.830601092896176%"),
    top: hp("105.05464480874315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_317: {
    width: wp("22.84722222222222%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_11_318: {
    width: wp("22.84722222222222%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_319: {
    width: wp("22.84722222222222%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_11_320: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.948898565573799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.07042100694443%")
  },
  View_11_321: {
    width: wp("15.76388888888889%"),
    top: hp("2.595628415300567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444287%"),
    justifyContent: "center"
  },
  Text_11_321: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_322: {
    width: wp("22.84722222222222%"),
    height: hp("26.229510281255337%"),
    top: hp("112.02185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_323: {
    width: wp("22.84722222222222%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_324: {
    width: wp("22.84722222222222%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_11_325: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.9488318604849724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.07042100694443%")
  },
  View_11_326: {
    width: wp("15.76388888888889%"),
    top: hp("2.5956284153005527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444287%"),
    justifyContent: "center"
  },
  Text_11_326: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_327: {
    width: wp("22.84722222222222%"),
    height: hp("6.830601092896176%"),
    top: hp("6.9672131147541165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_328: {
    width: wp("22.84722222222222%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_11_329: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.9488318604849724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.07042100694443%")
  },
  View_11_330: {
    width: wp("15.76388888888889%"),
    top: hp("2.5956284153005242%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444287%"),
    justifyContent: "center"
  },
  Text_11_330: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_331: {
    width: wp("19.791666666666664%"),
    height: hp("9.699455636446594%"),
    top: hp("16.530054644808757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5277777777777715%")
  },
  View_11_332: {
    width: wp("19.791666666666664%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_11_332: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_333: {
    width: wp("14.444444444444443%"),
    height: hp("3.415303152115619%"),
    top: hp("6.284153005464475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111143%")
  },
  ImageBackground_11_334: {
    width: wp("14.444444444444443%"),
    height: hp("3.415303152115619%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_335: {
    width: wp("7.013888888888889%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464731018399789%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.75%")
  },
  View_11_336: {
    width: wp("7.013888888888889%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_337: {
    width: wp("7.013888888888889%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_11_337: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_903: {
    width: wp("22.84722222222222%"),
    minWidth: wp("22.84722222222222%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55.60109289617487%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_904: {
    width: wp("22.84722222222222%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_11_905: {
    width: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    top: hp("3.1420765027322375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.972222222222214%")
  },
  View_11_906: {
    width: wp("15.76388888888889%"),
    top: hp("2.5956284153005384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444287%"),
    justifyContent: "center"
  },
  Text_11_906: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_339: {
    width: wp("22.84722222222222%"),
    minWidth: wp("22.84722222222222%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55.60109289617487%")
  },
  View_11_340: {
    width: wp("9.166666666666666%"),
    minWidth: wp("9.166666666666666%"),
    height: hp("3.415302109848606%"),
    minHeight: hp("3.415302109848606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.819444444444436%"),
    top: hp("6.967213114754097%")
  },
  ImageBackground_11_341: {
    width: wp("9.166666666666666%"),
    minWidth: wp("9.166666666666666%"),
    height: hp("3.415302109848606%"),
    minHeight: hp("3.415302109848606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_11_342: {
    width: wp("7.5%"),
    minWidth: wp("7.5%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333428%"),
    top: hp("0.5465043698503678%")
  },
  View_11_343: {
    width: wp("7.5%"),
    minWidth: wp("7.5%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_11_344: {
    width: wp("7.5%"),
    minWidth: wp("7.5%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_11_344: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_345: {
    width: wp("28.749999999999996%"),
    minWidth: wp("28.749999999999996%"),
    height: hp("99.89690728526298%"),
    minHeight: hp("99.89690728526298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.527777777777775%"),
    top: hp("14.207650273224042%")
  },
  View_11_347: {
    width: wp("28.749999999999996%"),
    minWidth: wp("28.749999999999996%"),
    height: hp("99.89690728526298%"),
    minHeight: hp("99.89690728526298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(217, 217, 217, 1)",
    borderWidth: 1
  },
  View_11_496: {
    width: wp("20.902798970540363%"),
    minWidth: wp("20.902798970540363%"),
    height: hp("28.55191673737406%"),
    minHeight: hp("28.55191673737406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9583121405707473%"),
    top: hp("18.85245745299293%")
  },
  View_11_497: {
    width: wp("20.90277777777778%"),
    minWidth: wp("20.90277777777778%"),
    height: hp("5.464481916583953%"),
    minHeight: hp("5.464481916583953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.0000042385525134136515%"),
    top: hp("23.087433257389584%"),
    backgroundColor: "rgba(214, 220, 231, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_11_1131: {
    width: wp("20.90277777777778%"),
    minWidth: wp("20.90277777777778%"),
    height: hp("21.584699453551913%"),
    minHeight: hp("21.584699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00002119276258838454%"),
    top: hp("0.000001563400516602087%")
  },
  View_11_1132: {
    width: wp("20.90277777777778%"),
    minWidth: wp("20.90277777777778%"),
    height: hp("21.584699453551913%"),
    minHeight: hp("21.584699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_11_1143: {
    width: wp("20.90277777777778%"),
    minWidth: wp("20.90277777777778%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.300546448087431%")
  },
  View_11_1133: {
    width: wp("20.90277777777778%"),
    minWidth: wp("20.90277777777778%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(206, 212, 218, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_11_1136: {
    width: wp("8.333333333333332%"),
    minWidth: wp("8.333333333333332%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0416666666666714%"),
    top: hp("1.775956284153004%"),
    justifyContent: "flex-start"
  },
  Text_11_1136: {
    color: "rgba(109, 117, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_1142: {
    width: wp("20.90277777777778%"),
    minWidth: wp("20.90277777777778%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_11_1137: {
    width: wp("20.90277777777778%"),
    minWidth: wp("20.90277777777778%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(206, 212, 218, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_11_1138: {
    width: wp("4.444444444444445%"),
    minWidth: wp("4.444444444444445%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0416666666666714%"),
    top: hp("1.775956284153004%"),
    justifyContent: "flex-start"
  },
  Text_11_1138: {
    color: "rgba(109, 117, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_1141: {
    width: wp("20.90277777777778%"),
    minWidth: wp("20.90277777777778%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_11_1139: {
    width: wp("20.90277777777778%"),
    minWidth: wp("20.90277777777778%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(206, 212, 218, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_11_1140: {
    width: wp("4.722222222222222%"),
    minWidth: wp("4.722222222222222%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0416666666666714%"),
    top: hp("1.775956284153004%"),
    justifyContent: "flex-start"
  },
  Text_11_1140: {
    color: "rgba(109, 117, 125, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_498: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.611132303873703%"),
    top: hp("24.453547222366744%"),
    justifyContent: "center"
  },
  Text_11_498: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_353: {
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
  ImageBackground_11_354: {
    width: wp("96.66666666666667%"),
    minWidth: wp("96.66666666666667%"),
    height: hp("5.327889697799266%"),
    minHeight: hp("5.327889697799266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.000010422670124299316%")
  },
  View_11_355: {
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
  Text_11_355: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_356: {
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
  ImageBackground_11_357: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_358: {
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
  View_11_359: {
    width: wp("1.990052064259847%"),
    minWidth: wp("1.990052064259847%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.54560682508681%"),
    top: hp("1.7759562841530059%")
  },
  ImageBackground_11_360: {
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
  ImageBackground_11_361: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_362: {
    width: wp("20.416666666666668%"),
    minWidth: wp("20.416666666666668%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.763888888888886%"),
    top: hp("1.6352815054804903%")
  },
  View_11_363: {
    width: wp("17.96227349175347%"),
    minWidth: wp("17.96227349175347%"),
    height: hp("1.6376542263343685%"),
    minHeight: hp("1.6376542263343685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.27533776121712705%")
  },
  ImageBackground_11_364: {
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
  View_11_365: {
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
  Text_11_365: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_366: {
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
  View_11_367: {
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
  ImageBackground_11_368: {
    width: wp("0.8077485693825616%"),
    minWidth: wp("0.8077485693825616%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3106689453125%"),
    top: hp("0.48890244113943027%")
  },
  ImageBackground_11_369: {
    width: wp("0.8077485693825616%"),
    minWidth: wp("0.8077485693825616%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3106689453125%"),
    top: hp("1.9557285829971391%")
  },
  ImageBackground_11_370: {
    width: wp("0.0000012177165192244704%"),
    minWidth: wp("0.0000012177165192244704%"),
    height: hp("1.1001051449384844%"),
    minHeight: hp("1.1001051449384844%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9320153130425268%"),
    top: hp("0.6111436854294752%")
  },
  ImageBackground_11_371: {
    width: wp("0.0000012177165192244704%"),
    minWidth: wp("0.0000012177165192244704%"),
    height: hp("1.1001051449384844%"),
    minHeight: hp("1.1001051449384844%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18640306260850537%"),
    top: hp("0.6111436854294752%")
  },
  View_11_372: {
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
    borderColor: "rgba(93, 94, 124, 1)",
    borderWidth: 1
  },
  View_11_373: {
    width: wp("0.43494151698218453%"),
    minWidth: wp("0.43494151698218453%"),
    height: hp("0.8556373132382585%"),
    minHeight: hp("0.8556373132382585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.466767774905012%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(93, 94, 124, 1)",
    borderWidth: 1
  },
  View_11_374: {
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
    borderColor: "rgba(93, 94, 124, 1)",
    borderWidth: 1
  },
  View_11_375: {
    width: wp("0.43494151698218453%"),
    minWidth: wp("0.43494151698218453%"),
    height: hp("0.8556373132382585%"),
    minHeight: hp("0.8556373132382585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7456122504340215%"),
    top: hp("1.466767774905012%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(93, 94, 124, 1)",
    borderWidth: 1
  },
  View_11_376: {
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
  View_11_377: {
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
  View_11_378: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    height: hp("1.3647118552786406%"),
    minHeight: hp("1.3647118552786406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0.40939205982646243%"),
    backgroundColor: "rgba(119, 122, 243, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_11_379: {
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
  Text_11_379: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_380: {
    width: wp("28.680555555555554%"),
    minWidth: wp("28.680555555555554%"),
    height: hp("5.46448347998447%"),
    minHeight: hp("5.46448347998447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.90277777777779%"),
    top: hp("8.333337502401383%")
  },
  View_11_381: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    height: hp("5.46448347998447%"),
    minHeight: hp("5.46448347998447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_11_382: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    height: hp("5.464481916583953%"),
    minHeight: hp("5.464481916583953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.000002084534024504592%"),
    backgroundColor: "rgba(119, 122, 243, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_11_383: {
    width: wp("7.430555555555555%"),
    minWidth: wp("7.430555555555555%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8472222222222143%"),
    top: hp("0.819674215681566%"),
    justifyContent: "center"
  },
  Text_11_383: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_11_384: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    height: hp("5.46448347998447%"),
    minHeight: hp("5.46448347998447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791666666666657%"),
    top: hp("0%")
  },
  View_11_385: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    height: hp("5.464481916583953%"),
    minHeight: hp("5.464481916583953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.000002084534024504592%"),
    backgroundColor: "rgba(244, 246, 250, 1)",
    borderColor: "rgba(204, 211, 225, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_11_386: {
    width: wp("7.430555555555555%"),
    minWidth: wp("7.430555555555555%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9861111111111143%"),
    top: hp("0.819674215681566%"),
    justifyContent: "center"
  },
  Text_11_386: {
    color: "rgba(93, 94, 124, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_387: {
    width: wp("0.6250056955549452%"),
    minWidth: wp("0.6250056955549452%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.763880411783855%"),
    top: hp("20.76502732240437%")
  },
  View_11_388: {
    width: wp("0.6250056955549452%"),
    minWidth: wp("0.6250056955549452%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_11_389: {
    width: wp("0.625%"),
    minWidth: wp("0.625%"),
    height: hp("126.77595628415301%"),
    minHeight: hp("126.77595628415301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_11_390: {
    width: wp("0.3472222222222222%"),
    minWidth: wp("0.3472222222222222%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13889312744140625%"),
    top: hp("66.39344262295083%")
  },
  ImageBackground_11_391: {
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
  View_11_793: {
    width: wp("17.708850436740452%"),
    minWidth: wp("17.708850436740452%"),
    height: hp("126.50273224043715%"),
    minHeight: hp("126.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333335%"),
    top: hp("20.76502732240437%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_794: {
    width: wp("17.291666666666668%"),
    height: hp("6.830604219697212%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0005001491970486605%")
  },
  View_11_795: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0.000002084534024504592%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_11_796: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.948896481039746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931527879503038%")
  },
  ImageBackground_11_797: {
    width: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    top: hp("2.4590184779766453%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944296095106335%")
  },
  View_11_798: {
    width: wp("6.666666666666667%"),
    top: hp("1.5027343249711826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.430517408582899%"),
    justifyContent: "center"
  },
  Text_11_798: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_799: {
    width: wp("17.708334392971462%"),
    height: hp("6.830604219697212%"),
    top: hp("6.967214157021115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000514984130859375%")
  },
  View_11_800: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0000021192762584831826%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_11_801: {
    width: wp("0.5317186978128221%"),
    height: hp("0.6596386758356146%"),
    top: hp("3.1420139667114846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833331214057074%")
  },
  ImageBackground_11_802: {
    width: wp("0.9722222222222222%"),
    height: hp("1.639344262295082%"),
    top: hp("2.5956294575675543%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.041668785942925%")
  },
  View_11_803: {
    width: wp("14.930555555555555%"),
    top: hp("1.639345304562088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777798970540366%"),
    justifyContent: "center"
  },
  Text_11_803: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_804: {
    width: wp("17.291667726304798%"),
    height: hp("13.661202185792352%"),
    top: hp("14.207650273224047%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0004916720920133955%")
  },
  View_11_805: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.75%")
  },
  View_11_806: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_11_807: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("1.3661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944953070746536%")
  },
  View_11_808: {
    width: wp("4.027777777777778%"),
    top: hp("8.87978142076502%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1527777777777786%"),
    justifyContent: "center"
  },
  Text_11_808: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_809: {
    width: wp("2.083333333333333%"),
    height: hp("3.278688524590164%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.125%")
  },
  View_11_810: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_811: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_11_812: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("1.3661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944953070746531%")
  },
  View_11_813: {
    width: wp("1.8055555555555554%"),
    top: hp("8.87978142076502%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4027777777777772%"),
    justifyContent: "center"
  },
  Text_11_813: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_814: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4722222222222228%")
  },
  View_11_815: {
    width: wp("17.291667726304798%"),
    height: hp("13.661202185792352%"),
    top: hp("28.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0005679660373263395%")
  },
  View_11_816: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.75%")
  },
  View_11_817: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_11_818: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944190131293393%")
  },
  View_11_819: {
    width: wp("3.125%"),
    top: hp("8.87978142076502%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.708324856228298%"),
    justifyContent: "center"
  },
  Text_11_819: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_820: {
    width: wp("2.083333333333333%"),
    height: hp("2.185792349726776%"),
    top: hp("4.0983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638888888888893%"),
    backgroundColor: "rgba(93, 94, 124, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_11_821: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_822: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_11_823: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944190131293402%")
  },
  ImageBackground_11_824: {
    width: wp("2.0833334657880993%"),
    height: hp("3.142076763298993%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4722179836697045%")
  },
  View_11_825: {
    width: wp("2.430555555555556%"),
    top: hp("8.87978142076502%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0555555555555554%"),
    justifyContent: "center"
  },
  Text_11_825: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_826: {
    width: wp("17.291667726304798%"),
    height: hp("13.661202185792352%"),
    top: hp("42.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0004916720920133955%")
  },
  View_11_827: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.75%")
  },
  View_11_828: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_11_829: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("1.3661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944953070746536%")
  },
  View_11_830: {
    width: wp("4.583333333333333%"),
    top: hp("8.87978142076502%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.152854071723091%"),
    justifyContent: "center"
  },
  Text_11_830: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_831: {
    width: wp("2.7777777777777777%"),
    height: hp("2.732240697725223%"),
    top: hp("4.0983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.916666666666668%")
  },
  View_11_832: {
    width: wp("2.7777777777777777%"),
    height: hp("2.732240697725223%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_11_833: {
    width: wp("1.8055555555555554%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.48611111111110894%"),
    justifyContent: "center"
  },
  Text_11_833: {
    color: "rgba(170, 170, 189, 1)",
    fontSize: 7,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_834: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_835: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_11_836: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("1.3661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944953070746531%")
  },
  View_11_837: {
    width: wp("1.9444444444444444%"),
    top: hp("8.87978142076502%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4028540717230906%"),
    justifyContent: "center"
  },
  Text_11_837: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_838: {
    width: wp("1.7361111111111112%"),
    height: hp("3.1420765027322406%"),
    top: hp("3.961748633879786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4027777777777772%")
  },
  View_11_839: {
    width: wp("17.291667726304798%"),
    height: hp("13.661202185792352%"),
    top: hp("56.42076502732241%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0004916720920133955%")
  },
  View_11_840: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.75%")
  },
  View_11_841: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_11_842: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944953070746536%")
  },
  View_11_843: {
    width: wp("4.791666666666667%"),
    top: hp("8.879781420765013%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.875033908420141%"),
    justifyContent: "center"
  },
  Text_11_843: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_844: {
    width: wp("2.7777777777777777%"),
    height: hp("2.732240697725223%"),
    top: hp("3.6885245901639365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.916666666666668%")
  },
  View_11_845: {
    width: wp("2.7777777777777777%"),
    height: hp("2.732240697725223%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_11_846: {
    width: wp("1.8055555555555554%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.48611111111110894%"),
    justifyContent: "center"
  },
  Text_11_846: {
    color: "rgba(170, 170, 189, 1)",
    fontSize: 7,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_847: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_848: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_11_849: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944953070746531%")
  },
  View_11_850: {
    width: wp("6.458333333333334%"),
    top: hp("8.879781420765013%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0417005750868058%"),
    justifyContent: "center"
  },
  Text_11_850: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_851: {
    width: wp("2.7777777777777777%"),
    height: hp("2.732240697725223%"),
    top: hp("3.6885245901639365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9166666666666665%")
  },
  View_11_852: {
    width: wp("2.7777777777777777%"),
    height: hp("2.732240697725223%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(229, 229, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_11_853: {
    width: wp("1.8055555555555554%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4861111111111107%"),
    justifyContent: "center"
  },
  Text_11_853: {
    color: "rgba(170, 170, 189, 1)",
    fontSize: 7,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_854: {
    width: wp("17.291667726304798%"),
    height: hp("13.661202185792352%"),
    top: hp("70.49180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0005255805121526791%")
  },
  View_11_855: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.75%")
  },
  View_11_856: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_11_857: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944613986545143%")
  },
  View_11_858: {
    width: wp("2.986111111111111%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    justifyContent: "center"
  },
  Text_11_858: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_859: {
    width: wp("1.875%"),
    height: hp("2.459016393442623%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%")
  },
  View_11_860: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_861: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_11_862: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944613986545138%")
  },
  View_11_863: {
    width: wp("4.305555555555555%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1527777777777772%"),
    justifyContent: "center"
  },
  Text_11_863: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_864: {
    width: wp("1.5277777777777777%"),
    height: hp("3.0054644808743167%"),
    top: hp("3.6885245901639365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5416666666666665%")
  },
  View_11_865: {
    width: wp("17.29221026102702%"),
    height: hp("13.661202185792352%"),
    top: hp("84.56284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_866: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.750542534722221%")
  },
  View_11_867: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  View_11_868: {
    width: wp("5.208333333333334%"),
    top: hp("8.879781420765013%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.666666666666666%"),
    justifyContent: "center"
  },
  Text_11_868: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_869: {
    width: wp("1.4583333333333333%"),
    height: hp("2.73224043715847%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.541666666666668%")
  },
  ImageBackground_11_870: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.444986979166666%")
  },
  View_11_871: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_872: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_11_873: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6949869791666665%")
  },
  View_11_874: {
    width: wp("3.4722222222222223%"),
    top: hp("8.879781420765013%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.569444444444444%"),
    justifyContent: "center"
  },
  Text_11_874: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_875: {
    width: wp("1.5277777777777777%"),
    height: hp("2.73224043715847%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.542209201388888%")
  },
  View_11_876: {
    width: wp("17.291582955254448%"),
    height: hp("13.661202185792352%"),
    top: hp("98.63387978142077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0004916720920133955%")
  },
  View_11_877: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.749915228949654%")
  },
  View_11_878: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_11_879: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.694580078125%")
  },
  View_11_880: {
    width: wp("2.8472222222222223%"),
    top: hp("8.060109289617458%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8472222222222214%"),
    justifyContent: "center"
  },
  Text_11_880: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_881: {
    width: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    top: hp("3.8251366120218364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111107%")
  },
  View_11_882: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_883: {
    width: wp("8.541667196485731%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)"
  },
  ImageBackground_11_884: {
    width: wp("0.8333333333333334%"),
    height: hp("0.4098360655737705%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944953070746531%")
  },
  View_11_885: {
    width: wp("2.9166666666666665%"),
    top: hp("8.879781420765013%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8472222222222228%"),
    justifyContent: "center"
  },
  Text_11_885: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_886: {
    width: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    top: hp("3.8251366120218364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.611111111111111%")
  },
  View_11_887: {
    width: wp("17.291666666666668%"),
    height: hp("6.830604219697212%"),
    top: hp("112.70491803278688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0004069010416669627%")
  },
  View_11_888: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_11_889: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.948898565573785%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055557%")
  },
  ImageBackground_11_890: {
    width: wp("0.9722222222222222%"),
    height: hp("1.912568306010929%"),
    top: hp("2.5956284153005527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944486829969612%")
  },
  View_11_891: {
    width: wp("13.472222222222221%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.430555555555555%"),
    justifyContent: "center"
  },
  Text_11_891: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_892: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("119.672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0004069010416669627%")
  },
  View_11_893: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_894: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_11_895: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.9488318604849724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055557%")
  },
  ImageBackground_11_896: {
    width: wp("1.0416666666666665%"),
    height: hp("1.912568306010929%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444442%")
  },
  View_11_897: {
    width: wp("6.041666666666667%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4305174085828987%"),
    justifyContent: "center"
  },
  Text_11_897: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_898: {
    width: wp("17.291666666666668%"),
    height: hp("6.830604219697212%"),
    top: hp("105.73770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0004069010416669627%")
  },
  View_11_899: {
    width: wp("17.291666666666668%"),
    height: hp("6.8306031774302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_11_900: {
    width: wp("0.33531635999679565%"),
    height: hp("1.046003995697355%"),
    top: hp("2.9488985655737565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.931532118055557%")
  },
  ImageBackground_11_901: {
    width: wp("0.9722222222222222%"),
    height: hp("1.912568306010929%"),
    top: hp("2.5956284153005527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6940375434027772%")
  },
  View_11_902: {
    width: wp("13.472222222222221%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.430555555555555%"),
    justifyContent: "center"
  },
  Text_11_902: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_396: {
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
  View_11_397: {
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
  View_11_398: {
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
  View_11_399: {
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
  Text_11_399: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_1474: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("5.464482437717458%"),
    minHeight: hp("5.464482437717458%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.458333333333336%"),
    top: hp("0.000002084534024504592%")
  },
  View_11_1475: {
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
  View_11_1477: {
    width: wp("7.430555555555555%"),
    minWidth: wp("7.430555555555555%"),
    minHeight: hp("3.8251371331553643%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6249999999999964%"),
    top: hp("0.6830601092896185%"),
    justifyContent: "center"
  },
  Text_11_1477: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_400: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    height: hp("5.737706481433306%"),
    minHeight: hp("5.737706481433306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.000002084534024504592%")
  },
  View_11_401: {
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
  View_11_402: {
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
  View_11_403: {
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
  Text_11_403: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_404: {
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
  View_11_405: {
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
  View_11_406: {
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
  Text_11_406: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_791: {
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
  View_11_792: {
    width: wp("2.638888888888889%"),
    height: hp("140.7103825136612%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(119, 122, 243, 1)"
  },
  View_11_781: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.830618811435387%"),
    minHeight: hp("6.830618811435387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.000008338136099726777%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_782: {
    width: wp("100%"),
    height: hp("6.830618811435387%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(30, 8, 68, 1)"
  },
  View_11_783: {
    width: wp("2.6016635364956326%"),
    height: hp("4.918032786885246%"),
    top: hp("0.9562924911415642%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.70516967773438%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_11_784: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.17981296115451%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_11_785: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_11_786: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.158838060167101%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_11_787: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9790250990125868%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_11_788: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.518463982476128%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_11_789: {
    width: wp("1.8789793385399711%"),
    height: hp("3.5519128288727644%"),
    top: hp("1.6393526004311818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.338651021321614%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_11_790: {
    width: wp("6.2873538335164385%"),
    top: hp("0.000008338136099726777%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.875%"),
    justifyContent: "flex-start"
  },
  Text_11_790: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_11_409: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.47222222222221%"),
    top: hp("29.6448087431694%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
