import { Trans } from '@lingui/macro'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="text-4xl">
        <div className="i-carbon-warning inline-block" />
      </div>
      <Trans>Not Found</Trans>
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
