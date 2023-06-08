
const RegisterApiCallback = (name,callback) => {
  if (window.parent.APicallbacks == null) {
    window.parent.APicallbacks = {}    
  }
  window.parent.APicallbacks[name] = callback
}
let CallCount = 1
if (process.env.NODE_ENV === 'development') {
  window.parent.BabelUI = {
    Login: (email, password, storeCredentials) => {
      setTimeout(() => {
        window.parent.APicallbacks.SetActiveDialog('character-selection')
        window.parent.APicallbacks.SetCharacter({name:'gordo en zunga', head: 0, body: 0, helm: 0, shield: 0, weapon:0, level: 20, status: 1, index: 0, class:1})
        window.parent.APicallbacks.SetCharacter({name:'Macho en zunga', head: 0, body: 1, helm: 0, shield: 0, weapon:0, level: 20, status: 0, index: 1, class:2})
        window.parent.APicallbacks.SetCharacter({name:'no c', head: 0, body: 0, helm: 0, shield: 0, weapon:0, level: 20, status: 0, index: 2, class:3})
        window.parent.APicallbacks.SetCharacter({name:'gordo en zunga', head: 0, body: 1, helm: 0, shield: 0, weapon:0, level: 20, status: 3, index: 3, class:4})
        window.parent.APicallbacks.SetCharacter({name:'gordo en zunga', head: 0, body: 0, helm: 0, shield: 0, weapon:0, level: 20, status: 4, index: 4, class:5})
        window.parent.APicallbacks.SetCharacter({name:'tute', head: 0, body: 1268, helm: 2, shield: 2, weapon:2, level: 47, status: 7, index: 5, class:6})
        window.parent.APicallbacks.SetCharacter({name:'gordo en zunga', head: 0, body: 0, helm: 0, shield: 0, weapon:0, level: 20, status: 0, index: 6, class:7})
        window.parent.APicallbacks.SetCharacter({name:'gordo en zunga', head: 0, body: 0, helm: 0, shield: 0, weapon:0, level: 20, status: 0, index: 7, class:8})
        window.parent.APicallbacks.SetCharacter({name:'gordo en zunga', head: 0, body: 0, helm: 0, shield: 0, weapon:0, level: 20, status: 0, index: 8, class:9})
      }, 100)
    },
    CloseClient: () => {
    },
    GetCredentials: () => ({
      user: "test@a.com",
      password: "pwdd",
    }),
    CreateAccount: (email, password, name, surname) => {
      setTimeout(() => {
        window.parent.APicallbacks.ErrorMessage('error test', 1 ,0)
      }, 100)
    },
    ResendValidationCode: email => {
    },
    ValidateCode: (email, code) => {
    },
    SetHost: (environment) => {
    },
    RequestPasswordReset: email => {
    },
    NewPasswordRequest: (email, code, password) => {
    },
    ExitCharacterSelection: () => {
      setTimeout(() => {
        window.parent.APicallbacks.SetActiveDialog('login')
      }, 100)
    },
    GetCharacterDrawInfo: (body, head, helm, shield, weapon) => {
      switch (body)
      {
        case 1:
          return  ({
            body: {
              body: {
                height: 47,
                imageNumber: 1822,
                startX: 0,
                startY: 0,
                width: 27
              },
              HeadOffsetX: 0,
              HeadOffsetY: -35
            },
            head: {
                height: 32,
                imageNumber: 420,
                startX: 81,
                startY: 160,
                width: 27
              },
            helm: {
                height: 32,
                imageNumber: -1,
                startX: 0,
                startY: 0,
                width: 27
              },
            shield: {
              height: 47,
              imageNumber: 2315,
              startX: 0,
              startY: 0,
              width: 27
            },
            weapon: {
                height: 47,
                imageNumber: 719,
                startX: 0,
                startY: 0,
                width: 27
              }
            })
        case 1268:
          return  ({
          body: {
            body: {
              height: 128,
              imageNumber: 386,
              startX: 0,
              startY: 512,
              width: 128
            },
            HeadOffsetX: 0,
            HeadOffsetY: -35
          },
          head: {
              height: 0,
              imageNumber: 0,
              startX: 0,
              startY: 0,
              width: 0
            },
          helm: {
              height: 0,
              imageNumber: 0,
              startX: 0,
              startY: 0,
              width: 0
            },
          shield: {
            height: 0,
            imageNumber: 0,
            startX: 0,
            startY: 0,
            width: 0
          },
          weapon: {
              height: 0,
              imageNumber: 0,
              startX: 0,
              startY: 0,
              width: 0
            }
          })
        default:
          return ({
            body: {
              body: {
                height: 47,
                imageNumber: 1101,
                startX: 0,
                startY: 0,
                width: 27
              },
              HeadOffsetX: 0,
              HeadOffsetY: -26
            },
            head: {
                height: 32,
                imageNumber: 420,
                startX: 135,
                startY: 0,
                width: 27
              },
            helm: {
                height: 32,
                imageNumber: 440,
                startX: 0,
                startY: 0,
                width: 27
              },
            shield: {
                height: 47,
                imageNumber: 2315,
                startX: 0,
                startY: 0,
                width: 27
              },
            weapon: {
                height: 47,
                imageNumber: 719,
                startX: 0,
                startY: 0,
                width: 27
              }
            })
      }
    },
    SelectCharacter: character => {
    },
    LoginCharacter: character => { 
      setTimeout(() => {
        window.parent.APicallbacks.SetActiveDialog('gameplay')
      }, 100)
    },
    GetHeadDrawInfo: headIndex => {
      return {
        height: 32,
        imageNumber: 420,
        startX: 135,
        startY: 0,
        width: 27
      }
    },
    CreateCharacter: (name, gender, race, head, classId, homeCity) => {
      return true
    },
    GetStoredLocale: () => {
      return "es"
    },
    EnableDebug: ()=> {
      return true
    },
    TransferCharacter: (index, email) => {

    },
    RequestDeleteCharacter: index => {
      setTimeout(() => {
        window.parent.APicallbacks.RequestDeleteCode()
      }, 1000)
    },
    ConfirmDeleteCharacter : (index, code) => {
      setTimeout(() => {
        window.parent.APicallbacks.DeleteCharacterFromList(index)
      }, 1000)
    },
    ValidatePrevCode: (code) => {
    },
    RequestCharacterTransfer: (index, destEmail) => {
    },
    GetGrhDrawInfo: (grhIndex) => {
      return {
        height: 32,
        imageNumber: 420,
        startX: 135,
        startY: 0,
        width: 27
      }
    },
    SendChat: msg => {
      if (CallCount < 100) {
        setTimeout(() => {
          window.parent.APicallbacks.PostChatMsg({sender:'Tester', text:(msg + CallCount), senderColor: {R:255, G:0, B: 0}, textColor: {R:255, G:255, B: 255}, italic:true, bold: true })
          window.parent.BabelUI.SendChat(msg)
          CallCount += 1
        }, 25)
      }
      else {
        CallCount = 0
      }
    },
    UpdateSelectedInvSlot: slotIndex => {
    },
    UseInvSlotIndex: slotIndex => {      
    },
    UpdateSelectedSpellSlot: slotIndex => {
    },
    UseSpellSlot: slotIndex => {
    },
    OpenVBDialog: dialogName => {
    },
    UpdateInputFocus: newState => {
    },
    OpenLink: link => {      
    },
    GoldClick: () => {
    },
    MoveInvItem: (source, dest) => {
      console.log("move item from " + source + " to " + dest)
    },
    RequestAction: action => {
      
    }
  }
}
export {RegisterApiCallback}