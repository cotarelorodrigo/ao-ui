
const RegisterApiCallback = (name,callback) => {
  console.log('registering callback ' + name);
  if (window.parent.APicallbacks == null) {
    console.log('creating empty ' + name);
    window.parent.APicallbacks = {}
    
  }
  window.parent.APicallbacks[name] = callback
  console.log('registering callback done');
}

if (process.env.NODE_ENV === 'development') {
  window.parent.BabelUI = {
    Login: (email, password, storeCredentials) => {
      setTimeout(() => {
        window.parent.APicallbacks.SetActiveDialog('character-selection')
        window.parent.APicallbacks.SetCharacter({name:'gordo en zunga', head: 0, body: 0, helm: 0, shield: 0, weapon:0, level: 20, criminal: 0, index: 0})
        window.parent.APicallbacks.SetCharacter({name:'Macho en zunga', head: 0, body: 1, helm: 0, shield: 0, weapon:0, level: 20, criminal: 0, index: 1})
        window.parent.APicallbacks.SetCharacter({name:'no c', head: 0, body: 0, helm: 0, shield: 0, weapon:0, level: 20, criminal: 0, index: 2})
        window.parent.APicallbacks.SetCharacter({name:'gordo en zunga', head: 0, body: 1, helm: 0, shield: 0, weapon:0, level: 20, criminal: 0, index: 3})
        window.parent.APicallbacks.SetCharacter({name:'gordo en zunga', head: 0, body: 0, helm: 0, shield: 0, weapon:0, level: 20, criminal: 0, index: 4})
        window.parent.APicallbacks.SetCharacter({name:'gordo en zunga', head: 0, body: 0, helm: 0, shield: 0, weapon:0, level: 20, criminal: 0, index: 5})
        window.parent.APicallbacks.SetCharacter({name:'gordo en zunga', head: 0, body: 0, helm: 0, shield: 0, weapon:0, level: 20, criminal: 0, index: 6})
        window.parent.APicallbacks.SetCharacter({name:'gordo en zunga', head: 0, body: 0, helm: 0, shield: 0, weapon:0, level: 20, criminal: 0, index: 7})
        window.parent.APicallbacks.SetCharacter({name:'gordo en zunga', head: 0, body: 0, helm: 0, shield: 0, weapon:0, level: 20, criminal: 0, index: 8})
      }, 100)
    },
    CloseClient: () => {
      console.log('close client')
    },
    GetCredentials: () => ({
      user: "test@a.com",
      password: "pwdd",
    }),
    CreateAccount: (email, password, name, surname) => ({
    }),
    ResendValidationCode: email => {
    },
    ValidateCode: (email, code) => {
    },
    SetHost: (environment) => {
      console.log('set server: ' + environment);
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
    }
  }
}
export {RegisterApiCallback}