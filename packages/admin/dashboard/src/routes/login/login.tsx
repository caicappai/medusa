import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

import { dark } from "@clerk/themes"
import { useAuth, useClerk } from "@clerk/clerk-react"
import { Heading, Text } from "@medusajs/ui"

import AvatarBox from "../../components/common/logo-box/avatar-box"
import { useDashboardExtension } from "../../extensions"
import { useSignInClerk } from "../../hooks/api"
import { useEffect } from "react"

export const Login = () => {
  const clerk = useClerk()
  const { isLoaded, isSignedIn, getToken, orgId } = useAuth()
  const navigate = useNavigate()
  const { getWidgets } = useDashboardExtension()

  const { mutateAsync } = useSignInClerk()

  useEffect(() => {
    const signIn = async () => {
      if (isLoaded && !isSignedIn) {
        const signInDiv = document.getElementById("sign-in") as HTMLDivElement
        clerk.mountSignIn(signInDiv, {
          forceRedirectUrl: window.location.href,
          appearance: {
            baseTheme: dark,
            elements: {
              modalCloseButton: {
                visibility: "hidden",
              },
            },
          },
        })
      } else if (isLoaded && isSignedIn) {
        console.log("orgId", orgId)
        const token = await getToken()
        await mutateAsync({ authToken: token || "" })

        navigate("/orders")
      }
    }
    signIn()
  }, [isLoaded, isSignedIn, clerk, mutateAsync, getToken, navigate, orgId])

  return (
    <div className="bg-ui-bg-subtle flex min-h-dvh w-dvw items-center justify-center">
      <div className="m-4 flex w-full max-w-[280px] flex-col items-center">
        <AvatarBox />
        <div className="items-center justify-center gap-y-3">
          {getWidgets("login.before").map((Component, i) => {
            return <Component key={i} />
          })}
          <div className="m-auto">
            <div id="sign-in" />
          </div>
          {getWidgets("login.after").map((Component, i) => {
            return <Component key={i} />
          })}
        </div>
      </div>
    </div>
  )
}
