/* eslint-disable */
import { Component, ErrorInfo, ReactNode } from "react";
import { Flex, Text, Button } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(public props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback .
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  handleReload = () => location.reload();

  public render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Flex
          alignItems="center"
          justifyContent="center"
          height="100%"
          flexDirection="column"
          p={20}
          textAlign="center"
        >
          <Text color={"#77777"} mb="4">
            We sense some troubles. Please reload the page.
          </Text>

          <Button color="blackAlpha.200" size="md" onClick={this.handleReload}>
            Reload
          </Button>
        </Flex>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
