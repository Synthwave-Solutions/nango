import { ExternalLink, TriangleAlert } from 'lucide-react';

interface OverdueInvoiceAlertProps {
    portalUrl: string | null;
}

/**
 * Warning shown when the org has overdue invoices, linking out to the Orb billing portal
 * to edit the payment method. Rendered in the sidebar and above the Billing & usage page.
 *
 * Hand-rolled to match `UsageLimitAlert` rather than built on `ui/Alert`, whose look has
 * drifted from the design system's — fold both into the DS alert once it lands there.
 */
export function OverdueInvoiceAlert({ portalUrl }: OverdueInvoiceAlertProps) {
    return (
        <div className="flex gap-2 rounded border-[0.5px] px-2 py-2 bg-status-warning-bg border-status-warning-border">
            <TriangleAlert className="size-4 shrink-0 text-status-warning-text" />
            <div className="flex flex-col gap-0.5">
                <p className="text-body-small-regular text-status-warning-text">Invoice(s) overdue</p>
                <p className="text-body-small-regular text-text-default">Edit payment method to avoid interruption.</p>
                {portalUrl && (
                    <a
                        href={portalUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-fit items-center gap-1 mt-1 rounded-[2px] underline text-body-small-regular focus-default text-status-warning-text"
                    >
                        Edit payment method
                        <ExternalLink className="size-3" />
                    </a>
                )}
            </div>
        </div>
    );
}
