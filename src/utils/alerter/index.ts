import Alerter, { AlerterConfig, AlertLevel } from '@balinkltd/alerter';

export const alerter = ({ level, subject, description }) => {

    const subscribers = [].map((subscriber): { email: string, hasSubscribedTo: AlertLevel } => ({
        email: subscriber,
        hasSubscribedTo: level,
    }));

    const alertConfig: AlerterConfig = {
        emailConfig: {
            credentials: {
                username: "",
                password: "",
                service: ""
            },
            subscribers,
        },
    };

    return new Alerter(alertConfig).alert(
        {
            projectName: 'C-Link',
            date: new Date(),
            level,
            subject,
            description,
            env: "",
            region: ""
        },
        { sendEmail: true, createJiraTicket: false, createTrelloTicket: false }
    )
}