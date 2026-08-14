import { CircleAlert, ExternalLink } from 'lucide-react';

interface OverdueInvoiceAlertProps {
    portalUrl: string | null;
}

/**
 * Warning shown when the org has overdue invoices, linking out to the Orb billing portal
 * to edit the payment method. Rendered in the sidebar and above the Billing & usage page.
 *
 * Hand-rolled rather than built on `ui/Alert`, whose look has drifted from the design
 * system's — fold both into the DS alert once it lands there.
 *
 * Deliberately not dismissible, unlike the alert in the design: an unpaid invoice stays
 * true until it's paid, so the warning should persist rather than be closable.
 */
export function OverdueInvoiceAlert({ portalUrl }: OverdueInvoiceAlertProps) {
    return (
        <div className="flex items-start gap-2 rounded-ds-sm border-ds-hairline border-status-danger-border bg-status-danger-bg px-2 py-2">
            {/* Nudged down to sit on the title's baseline rather than the top of its line box. */}
            <CircleAlert className="mt-0.5 size-4 shrink-0 text-status-danger-icon" />
            <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-0.5">
                    <p className="type-text-regular-sm text-status-danger-text">Invoice(s) overdue</p>
                    <p className="type-text-regular-xs text-text-default">Edit payment method to avoid interruption.</p>
                </div>
                {portalUrl && (
                    <a
                        href={portalUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="type-text-regular-sm focus-default inline-flex w-fit items-center gap-1 rounded-ds-xs text-status-danger-text"
                    >
                        Edit payment method
                        <ExternalLink className="size-3" />
                    </a>
                )}
            </div>
        </div>
    );
}
