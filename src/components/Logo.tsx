import { Link as RouterLink } from 'react-router-dom'
// @mui
import { useTheme } from '@mui/material/styles'
import { Box, BoxProps } from '@mui/material'

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  disabledLink?: boolean
}

export default function Logo({ disabledLink = false, sx }: Props) {
  const theme = useTheme()

  const PRIMARY_LIGHT = theme.palette.secondary.lighter

  const PRIMARY_MAIN = theme.palette.secondary.lighter

  const PRIMARY_DARK = theme.palette.secondary.dark

  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 408 333"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_284_8833)">
          <circle
            cx="270.636"
            cy="135.899"
            r="135.506"
            fill="url(#paint0_linear_284_8833)"
            fillOpacity="0.9"
          />
          <path
            d="M406.141 333.036C406.141 333.082 406.103 333.12 406.057 333.12H318.934C282.627 333.12 253.194 303.687 253.194 267.38C253.194 267.38 269.294 244.572 271.977 196.273C274.66 147.974 230.386 111.75 253.194 0.393463C335.103 -9.57809 407.204 54.5239 406.889 137.037L406.141 333.036Z"
            fill="url(#paint1_linear_284_8833)"
            fillOpacity="0.75"
          />
          <circle
            cx="136.203"
            cy="197.615"
            r="135.506"
            transform="rotate(-180 136.203 197.615)"
            fill="url(#paint2_linear_284_8833)"
            fillOpacity="0.9"
          />
          <path
            d="M0.69874 0.47778C0.698918 0.431206 0.736723 0.393555 0.783297 0.393555H87.9056C124.213 0.393555 153.646 29.8265 153.646 66.1339C153.646 66.1339 137.546 88.9418 134.863 137.241C132.18 185.54 176.454 221.764 153.646 333.12C71.7369 343.092 -0.364283 278.99 -0.0493469 196.477L0.69874 0.47778Z"
            fill="url(#paint3_linear_284_8833)"
            fillOpacity="0.75"
          />
          <g opacity="0.5">
            <circle
              cx="270.636"
              cy="135.899"
              r="135.506"
              fill="url(#paint4_linear_284_8833)"
              fillOpacity="0.9"
            />
            <path
              d="M406.141 333.036C406.141 333.082 406.103 333.12 406.057 333.12H318.934C282.627 333.12 253.194 303.687 253.194 267.38C253.194 267.38 269.294 244.572 271.977 196.273C274.66 147.974 230.386 111.75 253.194 0.393463C335.103 -9.57809 407.204 54.5239 406.889 137.037L406.141 333.036Z"
              fill="url(#paint5_linear_284_8833)"
              fillOpacity="0.75"
            />
            <circle
              cx="136.203"
              cy="197.615"
              r="135.506"
              transform="rotate(-180 136.203 197.615)"
              fill="url(#paint6_linear_284_8833)"
              fillOpacity="0.9"
            />
            <path
              d="M0.69874 0.47778C0.698918 0.431206 0.736723 0.393555 0.783297 0.393555H87.9056C124.213 0.393555 153.646 29.8265 153.646 66.1339C153.646 66.1339 137.546 88.9418 134.863 137.241C132.18 185.54 176.454 221.764 153.646 333.12C71.7369 343.092 -0.364283 278.99 -0.0493469 196.477L0.69874 0.47778Z"
              fill="url(#paint7_linear_284_8833)"
              fillOpacity="0.75"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_284_8833"
            x1="406.142"
            y1="282.138"
            x2="135.131"
            y2="-53.272"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={PRIMARY_LIGHT} />
            <stop offset="1" stopColor={PRIMARY_MAIN} stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_284_8833"
            x1="397.144"
            y1="358.611"
            x2="206.18"
            y2="161.356"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={PRIMARY_LIGHT} />
            <stop offset="1" stopColor={PRIMARY_MAIN} stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_284_8833"
            x1="271.709"
            y1="343.853"
            x2="0.697746"
            y2="8.44329"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={PRIMARY_LIGHT} />
            <stop offset="1" stopColor={PRIMARY_MAIN} stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_284_8833"
            x1="9.69594"
            y1="-25.0976"
            x2="200.66"
            y2="172.158"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={PRIMARY_LIGHT} />
            <stop offset="1" stopColor={PRIMARY_MAIN} stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_284_8833"
            x1="406.142"
            y1="282.138"
            x2="135.131"
            y2="-53.272"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={PRIMARY_LIGHT} />
            <stop offset="1" stopColor={PRIMARY_MAIN} stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_284_8833"
            x1="397.144"
            y1="358.611"
            x2="206.18"
            y2="161.356"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={PRIMARY_LIGHT} />
            <stop offset="1" stopColor={PRIMARY_MAIN} stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_284_8833"
            x1="271.709"
            y1="343.853"
            x2="0.697746"
            y2="8.44329"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={PRIMARY_LIGHT} />
            <stop offset="1" stopColor={PRIMARY_MAIN} stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_284_8833"
            x1="9.69594"
            y1="-25.0976"
            x2="200.66"
            y2="172.158"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={PRIMARY_LIGHT} />
            <stop offset="1" stopColor={PRIMARY_MAIN} stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_284_8833">
            <rect
              width="406.736"
              height="332.682"
              fill="white"
              transform="translate(0.478516 0.393555)"
            />
          </clipPath>
        </defs>
      </svg>
    </Box>
  )

  if (disabledLink) {
    return <>{logo}</>
  }

  return <RouterLink to="/">{logo}</RouterLink>
}
