function determineRedirectForCreate(context)
{
    let workspaceId = localStorage.getItem('workspace-id');
    if (workspaceId !== null) {
        switch (localStorage.getItem('onboarding-create-flow')) {
            case 'connect-github-clicked':
                context.router.push({
                    name: 'connect-jira',
                    params: {
                        id: workspaceId
                    }
                });
                break;
        }
    }
}

export default function(context) {
    determineRedirectForCreate(context);
}
