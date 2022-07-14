import { Trans } from '@lingui/macro'

export default function Hi() {
  const navigate = useNavigate()
  const params = useParams()

  return (
      <div>
        <div className="i-carbon-pedestrian text-4xl inline-block" />
        <p>
        <Trans>Hi, {params.name}</Trans>
        </p>
        <p className="text-sm op50">
          <em><Trans>Dynamic route!</Trans></em>
        </p>
        <div>
          <button
            className="btn m-3 text-sm mt-8"
            onClick={() => navigate(-1)}
          >
            <Trans>Back</Trans>
          </button>
        </div>
      </div>
  )
}
