import {
  LucideProps,
  Moon,
  PencilIcon,
  SunMedium,
  Twitter,
  type Icon as LucideIcon,
} from "lucide-react"

interface ExtendedLucideProps extends LucideProps {
  className?: string
}

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  PencilIcon: PencilIcon,
  twitter: Twitter,
  logo: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
      />
    </svg>
  ),
  tooltip: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="24"
      height="24"
      viewBox="0 0 26 26"
      fill="currentColor"
      {...props}
    >
      <path d="M 13 1.1875 C 6.476563 1.1875 1.1875 6.476563 1.1875 13 C 1.1875 19.523438 6.476563 24.8125 13 24.8125 C 19.523438 24.8125 24.8125 19.523438 24.8125 13 C 24.8125 6.476563 19.523438 1.1875 13 1.1875 Z M 15.460938 19.496094 C 14.851563 19.734375 14.367188 19.917969 14.003906 20.042969 C 13.640625 20.167969 13.222656 20.230469 12.742188 20.230469 C 12.007813 20.230469 11.433594 20.050781 11.023438 19.691406 C 10.617188 19.335938 10.414063 18.878906 10.414063 18.324219 C 10.414063 18.109375 10.429688 17.890625 10.460938 17.667969 C 10.488281 17.441406 10.539063 17.191406 10.605469 16.90625 L 11.367188 14.21875 C 11.433594 13.960938 11.492188 13.71875 11.539063 13.488281 C 11.585938 13.257813 11.605469 13.046875 11.605469 12.855469 C 11.605469 12.515625 11.535156 12.273438 11.394531 12.140625 C 11.25 12.003906 10.980469 11.9375 10.582031 11.9375 C 10.386719 11.9375 10.183594 11.96875 9.976563 12.027344 C 9.769531 12.089844 9.59375 12.148438 9.445313 12.203125 L 9.648438 11.375 C 10.144531 11.171875 10.621094 11 11.078125 10.855469 C 11.53125 10.710938 11.964844 10.636719 12.367188 10.636719 C 13.097656 10.636719 13.664063 10.816406 14.058594 11.167969 C 14.453125 11.519531 14.652344 11.980469 14.652344 12.542969 C 14.652344 12.660156 14.640625 12.867188 14.613281 13.160156 C 14.585938 13.453125 14.535156 13.722656 14.460938 13.972656 L 13.703125 16.652344 C 13.640625 16.867188 13.585938 17.113281 13.535156 17.386719 C 13.488281 17.660156 13.464844 17.871094 13.464844 18.011719 C 13.464844 18.367188 13.542969 18.613281 13.703125 18.742188 C 13.859375 18.871094 14.136719 18.933594 14.53125 18.933594 C 14.714844 18.933594 14.921875 18.902344 15.15625 18.839844 C 15.386719 18.773438 15.554688 18.71875 15.660156 18.667969 Z M 15.324219 8.617188 C 14.972656 8.945313 14.546875 9.109375 14.050781 9.109375 C 13.554688 9.109375 13.125 8.945313 12.769531 8.617188 C 12.414063 8.289063 12.238281 7.890625 12.238281 7.425781 C 12.238281 6.960938 12.417969 6.558594 12.769531 6.226563 C 13.125 5.894531 13.554688 5.730469 14.050781 5.730469 C 14.546875 5.730469 14.972656 5.894531 15.324219 6.226563 C 15.679688 6.558594 15.855469 6.960938 15.855469 7.425781 C 15.855469 7.890625 15.679688 8.289063 15.324219 8.617188 Z"></path>
    </svg>
  ),
  saas: (props: LucideProps) => (
    <svg
      width="374.67"
      height="317.33"
      version="1.1"
      viewBox="0 0 374.67 317.33"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="m25.338 223.16c-0.77694-0.97118 0.33511-23.286 15.705-30.848 5.0617-2.4906-15.632-67.257 60.014-74.597 0.82524-52.61 23.856-57.416 61.697-34.774 45.218-70.332 123.15-39.565 122.83 33.092 22.904 11.939 45.57 24.132 46.553 59.453 8.5725 0.26338 16.916-0.39082 26.922 5.6088 4.0418-31.826-6.215-60.694-45.431-83.571-19.42-99.348-106.16-104.98-161.53-51.601-40.238-9.9921-69.474 2.0195-81.327 48.796-87.964 37.882-54.754 109.72-45.431 128.44z" />
        <g>
          <path d="m103.81 224.28q-8.2134-4.84-17.6-7.92-9.24-3.08-15.547-3.08-4.9867 0-7.92 1.9067-2.7867 1.76-2.7867 5.28 0 3.3733 2.4933 5.72 2.4933 2.2 6.16 3.6667 3.6667 1.32 10.853 3.52 10.707 3.08 17.6 6.16 7.04 3.08 12.027 9.5334 4.9867 6.3067 4.9867 16.573t-5.4267 17.6q-5.4267 7.1867-14.96 10.853-9.3867 3.6667-20.973 3.6667-12.76 0-25.52-4.4-12.613-4.5467-21.853-12.32l10.413-20.973q7.7734 6.8934 18.333 11.293 10.707 4.4 18.92 4.4 6.0133 0 9.3867-2.2 3.52-2.2 3.52-6.4534 0-3.52-2.64-5.8667-2.4933-2.3467-6.4533-3.6667-3.8133-1.4667-10.853-3.3733-10.56-2.9333-17.453-5.8667-6.8933-3.08-11.88-9.0934-4.84-6.16-4.84-16.28 0-9.5334 4.9867-16.72 5.1333-7.1867 14.373-11 9.3867-3.96 21.707-3.96 11.147 0 22 3.2267 10.853 3.08 19.067 8.36z" />
          <path d="m156.53 215.77q16.427 0 25.52 7.6267 9.0934 7.48 9.24 21.12v51.627h-25.667v-8.9467q-7.92 10.12-23.907 10.12-12.613 0-19.947-6.7467-7.1867-6.8934-7.1867-18.04 0-11.293 7.7734-17.6 7.92-6.3067 22.587-6.4534h20.68v-0.88q0-5.72-3.96-8.8-3.8133-3.08-11.147-3.08-4.9867 0-11.293 1.6133-6.16 1.6133-12.467 4.6933l-7.1867-17.6q9.68-4.4 18.48-6.4534 8.9467-2.2 18.48-2.2zm-6.7467 63.8q5.8667 0 10.267-2.7867 4.4-2.9333 5.5734-7.48v-6.8933h-15.547q-11 0-11 8.2134 0 4.1067 2.7867 6.6 2.9333 2.3467 7.92 2.3467z" />
          <path d="m237.72 215.77q16.427 0 25.52 7.6267 9.0934 7.48 9.24 21.12v51.627h-25.667v-8.9467q-7.92 10.12-23.907 10.12-12.613 0-19.947-6.7467-7.1867-6.8934-7.1867-18.04 0-11.293 7.7734-17.6 7.92-6.3067 22.587-6.4534h20.68v-0.88q0-5.72-3.96-8.8-3.8133-3.08-11.147-3.08-4.9867 0-11.293 1.6133-6.16 1.6133-12.467 4.6933l-7.1867-17.6q9.68-4.4 18.48-6.4534 8.9467-2.2 18.48-2.2zm-6.7467 63.8q5.8667 0 10.267-2.7867 4.4-2.9333 5.5734-7.48v-6.8933h-15.547q-11 0-11 8.2134 0 4.1067 2.7867 6.6 2.9333 2.3467 7.92 2.3467z" />
          <path d="m353.97 224.28q-8.2134-4.84-17.6-7.92-9.24-3.08-15.547-3.08-4.9867 0-7.92 1.9067-2.7867 1.76-2.7867 5.28 0 3.3733 2.4933 5.72 2.4933 2.2 6.16 3.6667 3.6667 1.32 10.853 3.52 10.707 3.08 17.6 6.16 7.04 3.08 12.027 9.5334 4.9867 6.3067 4.9867 16.573t-5.4267 17.6q-5.4267 7.1867-14.96 10.853-9.3867 3.6667-20.973 3.6667-12.76 0-25.52-4.4-12.613-4.5467-21.853-12.32l10.413-20.973q7.7734 6.8934 18.333 11.293 10.707 4.4 18.92 4.4 6.0134 0 9.3867-2.2 3.52-2.2 3.52-6.4534 0-3.52-2.64-5.8667-2.4933-2.3467-6.4534-3.6667-3.8134-1.4667-10.853-3.3733-10.56-2.9333-17.453-5.8667-6.8933-3.08-11.88-9.0934-4.84-6.16-4.84-16.28 0-9.5334 4.9867-16.72 5.1334-7.1867 14.373-11 9.3867-3.96 21.707-3.96 11.147 0 22 3.2267 10.853 3.08 19.067 8.36z" />
        </g>
      </g>
    </svg>
  ),
  magento: (props: LucideProps) => {
    ;<svg
      xmlns="http://www.w3.org/2000/svg"
      height={40}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 303"
      id="magento"
    >
      <path
        fill="#F46F25"
        d="M144.852 90.67v172.192l-16.933 10.349-16.946-10.404V90.803l-43.878 27.016v147.255l60.824 37.217 61.339-37.482V117.725L144.852 90.67zM127.919 0L0 77.502v147.274l33.223 19.572V97.06l94.722-57.596 94.81 57.512.391.223-.042 146.929L256 224.776V77.502L127.919 0z"
      ></path>
    </svg>
  },
  cancel: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 20"
      version="1.1"
      x="0px"
      y="0px"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g fill="red">
          <polyline points="9.50270819 8.00000002 14 3.50270817 12.5012561 2.00396421 8.00396425 6.50125604 3.50667236 2.00396421 2.00792842 3.50270817 6.50522023 8.00000002 2.00792842 12.4972918 3.50667236 13.9960358 8.00396425 9.49874398 12.5012561 13.9960358 14 12.4972918 9.50270819 8.00000002" />
        </g>
      </g>
      <text
        x="0"
        y="31"
        fill="#000000"
        fontSize="5px"
        fontWeight="bold"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, SansSerif"
      >
        Created by Johan Ronsse
      </text>
      <text
        x="0"
        y="36"
        fill="#000000"
        fontSize="5px"
        fontWeight="bold"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, SansSerif"
      >
        from the Noun Project
      </text>
    </svg>
  ),
  spinner: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  google: {
    color: (props: LucideProps) => (
      <svg viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
          fill="#4285F4"
        />
        <path
          d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.130-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
          fill="#34A853"
        />
        <path
          d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
          fill="#FBBC05"
        />
        <path
          d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
          fill="#EB4335"
        />
      </svg>
    ),
    bnw: (props: LucideProps) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 640 640"
        {...props}
      >
        <path d="M326.331 274.255v109.761h181.49c-7.37 47.115-54.886 138.002-181.49 138.002-109.242 0-198.369-90.485-198.369-202.006 0-111.509 89.127-201.995 198.369-201.995 62.127 0 103.761 26.516 127.525 49.359l86.883-83.635C484.99 31.512 412.741-.012 326.378-.012 149.494-.012 6.366 143.116 6.366 320c0 176.884 143.128 320.012 320.012 320.012 184.644 0 307.256-129.876 307.256-312.653 0-21-2.244-36.993-5.008-52.997l-302.248-.13-.047.024z" />
      </svg>
    ),
  },
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  code: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
    </svg>
  ),
  todo: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.215 2.387l-8.258 10.547-2.704-3.092a1 1 0 10-1.506 1.316l3.103 3.548a1.5 1.5 0 002.31-.063L21.79 3.62a1 1 0 10-1.575-1.233zM20 11a1 1 0 00-1 1v6.077c0 .459-.021.57-.082.684a.364.364 0 01-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.57-.022-.684-.082a.363.363 0 01-.157-.157c-.06-.113-.082-.225-.082-.684V5.5a.5.5 0 01.5-.5l8.5.004a1 1 0 100-2L5.5 3A2.5 2.5 0 003 5.5v12.577c0 .76.082 1.185.319 1.627.224.419.558.753.977.977.442.237.866.319 1.627.319h12.154c.76 0 1.185-.082 1.627-.319.42-.224.754-.558.978-.977.236-.442.318-.866.318-1.627V12a1 1 0 00-1-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  shortcut: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      className="transition-all duration-300 group-hover:-rotate-12"
      viewBox="0 0 24 24"
    >
      <path
        stroke="none"
        d="M6 14c-2.206 0-4 1.794-4 4s1.794 4 4 4a4.003 4.003 0 003.998-3.98H10V16h4v2.039h.004A4.002 4.002 0 0018 22c2.206 0 4-1.794 4-4s-1.794-4-4-4h-2v-4h2c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4v2h-4V5.98h-.002A4.003 4.003 0 006 2C3.794 2 2 3.794 2 6s1.794 4 4 4h2v4H6zm2 4c0 1.122-.879 2-2 2s-2-.878-2-2 .879-2 2-2h2v2zm10-2c1.121 0 2 .878 2 2s-.879 2-2 2-2-.878-2-2v-2h2zM16 6c0-1.122.879-2 2-2s2 .878 2 2-.879 2-2 2h-2V6zM6 8c-1.121 0-2-.878-2-2s.879-2 2-2 2 .878 2 2v2H6zm4 2h4v4h-4v-4z"
      ></path>
    </svg>
  ),
  search: (props: ExtendedLucideProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z"
        stroke="#94969C"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  home: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  layoutGrid: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  ),
  heart: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  ),
  lightbulb: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  ),
  mail: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  terminal: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" x2="20" y1="19" y2="19" />
    </svg>
  ),
  errorpage: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="514"
      height="164"
      fill="none"
      viewBox="0 0 514 164"
    >
      <circle cx="101" cy="22" r="20" stroke="#94969C" strokeWidth="2"></circle>
      <circle
        cx="101"
        cy="142"
        r="20"
        stroke="#94969C"
        strokeWidth="2"
      ></circle>
      <circle cx="21" cy="102" r="20" stroke="#94969C" strokeWidth="2"></circle>
      <circle
        cx="141"
        cy="102"
        r="20"
        stroke="#94969C"
        strokeWidth="2"
      ></circle>
      <circle cx="193" cy="82" r="20" stroke="#94969C" strokeWidth="2"></circle>
      <circle cx="313" cy="82" r="20" stroke="#94969C" strokeWidth="2"></circle>
      <circle cx="253" cy="22" r="20" stroke="#94969C" strokeWidth="2"></circle>
      <circle
        cx="253"
        cy="142"
        r="20"
        stroke="#94969C"
        strokeWidth="2"
      ></circle>
      <path
        stroke="#94969C"
        strokeWidth="2"
        d="M1 102c0-11.046 8.954-20 20-20h120c11.046 0 20 8.954 20 20s-8.954 20-20 20H21c-11.046 0-20-8.954-20-20z"
      ></path>
      <path
        stroke="#94969C"
        strokeWidth="2"
        d="M101 162c-11.046 0-20-8.954-20-20V22c0-11.046 8.954-20 20-20s20 8.954 20 20v120c0 11.046-8.954 20-20 20z"
      ></path>
      <path
        stroke="#94969C"
        strokeWidth="2"
        d="M7.142 115.995c-7.81-7.81-7.81-20.474 0-28.284L86.711 8.142c7.81-7.81 20.473-7.81 28.284 0 7.81 7.81 7.81 20.474 0 28.285l-79.569 79.568c-7.81 7.811-20.473 7.811-28.284 0z"
      ></path>
      <circle cx="453" cy="22" r="20" stroke="#94969C" strokeWidth="2"></circle>
      <circle
        cx="453"
        cy="142"
        r="20"
        stroke="#94969C"
        strokeWidth="2"
      ></circle>
      <circle
        cx="373"
        cy="102"
        r="20"
        stroke="#94969C"
        strokeWidth="2"
      ></circle>
      <circle
        cx="493"
        cy="102"
        r="20"
        stroke="#94969C"
        strokeWidth="2"
      ></circle>
      <path
        stroke="#94969C"
        strokeWidth="2"
        d="M353 102c0-11.046 8.954-20 20-20h120c11.046 0 20 8.954 20 20s-8.954 20-20 20H373c-11.046 0-20-8.954-20-20z"
      ></path>
      <path
        stroke="#94969C"
        strokeWidth="2"
        d="M453 162c-11.046 0-20-8.954-20-20V22c0-11.046 8.954-20 20-20s20 8.954 20 20v120c0 11.046-8.954 20-20 20z"
      ></path>
      <path
        stroke="#94969C"
        strokeWidth="2"
        d="M359.142 115.995c-7.81-7.81-7.81-20.474 0-28.284l79.569-79.569c7.81-7.81 20.473-7.81 28.284 0 7.81 7.81 7.81 20.474 0 28.285l-79.569 79.568c-7.81 7.811-20.473 7.811-28.284 0z"
      ></path>
      <circle cx="253" cy="82" r="80" stroke="#94969C" strokeWidth="2"></circle>
      <circle cx="253" cy="82" r="40" stroke="#94969C" strokeWidth="2"></circle>
      <path stroke="#94969C" strokeWidth="2" d="M0 1L513 1"></path>
      <path stroke="#94969C" strokeWidth="2" d="M0 163L513 163"></path>
    </svg>
  ),
  kanban: (props: LucideProps) => (
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 52 52"
      enableBackground="new 0 0 52 52"
    >
      <path
        d="M32,17.5c0-0.8-0.7-1.5-1.5-1.5h-9c-0.8,0-1.5,0.7-1.5,1.5v27c0,0.8,0.7,1.5,1.5,1.5h9
c0.8,0,1.5-0.7,1.5-1.5V17.5z"
      />
      <path
        d="M14,17.5c0-0.8-0.7-1.5-1.5-1.5h-9C2.7,16,2,16.7,2,17.5v31C2,49.3,2.7,50,3.5,50h9c0.8,0,1.5-0.7,1.5-1.5
V17.5z"
      />
      <path
        d="M50,17.5c0-0.8-0.7-1.5-1.5-1.5h-9c-0.8,0-1.5,0.7-1.5,1.5v23c0,0.8,0.7,1.5,1.5,1.5h9
c0.8,0,1.5-0.7,1.5-1.5V17.5z"
      />
      <path d="M50,3.5C50,2.7,49.3,2,48.5,2h-45C2.7,2,2,2.7,2,3.5v5C2,9.3,2.7,10,3.5,10h45c0.8,0,1.5-0.7,1.5-1.5V3.5z" />
    </svg>
  ),
  finance: (props: LucideProps) => (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 124.029 124.029"
      fill="currentColor"
    >
      <g>
        <g>
          <path
            d="M46.163,71.234c9.877,0,17.884-8.008,17.884-17.884c0-9.877-8.006-17.884-17.884-17.884S28.279,43.473,28.279,53.35
			C28.279,63.226,36.286,71.234,46.163,71.234z M45.299,54.589c-3.425-1.24-5.643-2.806-5.643-5.839
			c0-2.805,1.957-4.958,5.251-5.545v-3.197h2.676v3.034c2.054,0.065,3.457,0.554,4.5,1.076l-0.88,3.001
			c-0.782-0.359-2.218-1.109-4.437-1.109c-2.283,0-3.098,1.174-3.098,2.283c0,1.337,1.173,2.088,3.946,3.197
			c3.654,1.37,5.286,3.131,5.286,6.034c0,2.772-1.924,5.219-5.513,5.806v3.359h-2.675v-3.166c-2.055-0.062-4.11-0.65-5.285-1.432
			l0.882-3.067c1.271,0.75,3.098,1.435,5.088,1.435c2.056,0,3.458-1.011,3.458-2.576C48.854,56.415,47.712,55.47,45.299,54.589z"
          />
          <path
            d="M72.838,39.089c9.909,0,17.941-8.033,17.941-17.942c0-9.909-8.032-17.942-17.941-17.942
			c-9.909,0-17.941,8.033-17.941,17.942C54.897,31.056,62.929,39.089,72.838,39.089z M63.415,21.899h1.833c0-0.164,0-0.36,0-0.524
			c0-0.393,0.033-0.817,0.066-1.177h-1.899v-2.029h2.192c0.394-1.997,1.277-3.698,2.455-4.941c1.767-1.963,4.156-3.076,7.068-3.076
			c1.963,0,3.6,0.491,4.68,1.015l-0.818,3.043c-0.85-0.457-2.191-0.884-3.665-0.884c-1.638,0-3.078,0.589-4.155,1.8
			c-0.689,0.72-1.18,1.8-1.441,3.043h8.574v2.029h-8.967c-0.064,0.36-0.064,0.752-0.064,1.145c0,0.196,0,0.36,0,0.557h9.033v1.995
			h-8.674c0.23,1.408,0.721,2.455,1.41,3.208c1.11,1.21,2.682,1.766,4.385,1.766c1.603,0,3.106-0.556,3.86-0.98l0.688,2.944
			c-1.08,0.655-2.914,1.31-5.008,1.31c-2.978,0-5.66-1.179-7.395-3.371c-1.047-1.211-1.768-2.848-2.062-4.877h-2.097V21.899z"
          />
          <path
            d="M108.582,47.367c8.531,0,15.447-6.916,15.447-15.447c0-8.531-6.916-15.447-15.447-15.447s-15.447,6.916-15.447,15.447
			C93.135,40.451,100.051,47.367,108.582,47.367z M105.004,22.763l2.367,5.1c0.507,1.042,0.816,1.916,1.184,2.817h0.057
			c0.339-0.845,0.703-1.831,1.184-2.874l2.452-5.043h3.662l-4.931,8.255h3.494v1.719h-4.424v1.916h4.424v1.719h-4.424v4.705h-3.24
			v-4.705h-4.395v-1.719h4.395v-1.916h-4.395v-1.719h3.521l-4.676-8.255H105.004z"
          />
          <path
            d="M74.703,60.601c0,8.813,7.145,15.958,15.957,15.958c8.814,0,15.958-7.145,15.958-15.958
			c0-8.814-7.144-15.958-15.958-15.958S74.703,51.787,74.703,60.601z M96.219,51.708l-0.64,2.707
			c-0.554-0.321-1.397-0.583-2.532-0.583c-2.154,0-2.941,1.455-2.941,3.144c0,0.989,0.146,1.776,0.322,2.619h4.074v2.474h-3.755
			c0.03,0.902,0.03,1.775-0.204,2.59c-0.291,0.99-0.873,1.834-1.688,2.562v0.058h8.179v2.94H84.285v-1.951
			c1.748-0.813,3.29-2.562,3.29-4.627c0-0.553-0.028-1.02-0.116-1.571h-2.91v-2.474h2.502c-0.146-0.815-0.291-1.775-0.291-2.707
			c0-3.58,2.533-5.908,6.142-5.908C94.473,50.981,95.578,51.33,96.219,51.708z"
          />
          <path
            d="M116.212,81.589c-2.056-1.637-6.036-3.549-10.499-3.549c-3.775,0-9.246,1.369-13.893,7.879
			c-4.18,5.336-9.419,7.496-13.674,8.314c0.382-0.953,0.63-2.098,0.637-3.717c0.038-9.051-7.176-15.855-17.151-15.9l-35.608,0.031
			c-3.342,0-6.631,0.986-9.404,2.771v-4.633H0v48.039h16.619v-5.104c0.628,0.311,1.493,0.938,1.493,0.938
			c2.861,1.578,7.295,3.515,11.818,3.515h32.713c28.179,0,47.634-15.787,54.69-23.607c2.108-2.338,4.292-4.756,4.041-7.801
			C121.152,86.044,119.15,83.929,116.212,81.589z M11.053,83.398H5.244v-5.809h5.809V83.398z M113.021,92.675
			c-6.535,7.244-24.528,21.69-50.377,21.69H29.931c-5.531,0-11.487-4.326-11.541-4.368c-0.51-0.376-1.117-0.568-1.729-0.568
			c-0.013,0-0.027,0.004-0.042,0.004V83.835c0.636,0.012,1.27-0.171,1.795-0.57l0.635-0.479c1.976-1.501,4.452-2.328,6.961-2.328
			l35.595-0.032c5.68,0.025,11.399,3.286,11.37,10.068c0,3.916-2.611,4.117-2.752,4.152H44.13c-1.604,0-2.904,1.301-2.904,2.904
			c0,1.603,1.3,2.902,2.904,2.902h27.693l1.543-0.004c4.347-0.001,15.295-1.027,23.073-11.008c0.025-0.034,0.053-0.069,0.076-0.104
			c2.586-3.641,5.68-5.487,9.196-5.487c3.175,0,5.89,1.494,6.88,2.283c2.91,2.317,2.991,3.077,2.993,3.108
			C115.596,89.825,113.727,91.896,113.021,92.675z"
          />
        </g>
      </g>
    </svg>
  ),
  user: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  filter: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  ),
  arrowRight: (props: LucideProps) => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="textMutedForeground mr-2 size-4"
    >
      <path
        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  arrowTop: (props: LucideProps) => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="textMutedForeground mr-2 size-4"
    >
      <path
        d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  arrowBottom: (props: LucideProps) => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="textMutedForeground mr-2 size-4"
    >
      <path
        d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
}
